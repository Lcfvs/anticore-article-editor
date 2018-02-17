import {indexOf} from 'anticore/primitive/array/indexOf';
import {create} from 'anticore/primitive/object/create';
import {closest} from 'anticore/dom/query/closest';
import {all} from 'anticore/dom/query/all';
import {one} from 'anticore/dom/query/one';
import {nodes} from 'anticore/dom/query/nodes';
import {parent} from 'anticore/dom/query/parent';
import {element} from 'anticore/dom/node/element';
import {current} from 'anticore/dom/selection/current';
import {isText} from 'anticore/dom/info/isText';
import {append} from 'anticore/dom/tree/append';
import {appendAll} from 'anticore/dom/tree/appendAll';
import {attr} from 'anticore/dom/tree/attr';
import {data} from 'anticore/dom/tree/data';
import {update} from 'anticore/dom/tree/update';
import {html} from 'anticore/dom/tree/html';
import {text} from 'anticore/dom/tree/text';
import {remove} from 'anticore/dom/tree/remove';
import {onClick} from 'anticore/dom/emitter/on/onClick';
import {onEnter} from 'anticore/dom/emitter/on/onEnter';
import {cut} from '../../dom/tree/cut';
import {prevent} from 'anticore/dom/emitter/prevent';

function handle(element) {
  let
  instance = create(),
  selection = current(),
  anchor = selection.anchorNode,
  siblings = nodes(cut(anchor, selection.anchorOffset)),
  target = anchor;

  instance.element = element;
  instance.tooltip = tooltip(instance);

  if (isText(anchor)) {
    target = parent(anchor);
  }

  append(element, target);
  appendAll(siblings, target);

  instance.tooltip.show();

  return instance;
}

function tooltip(handle) {
  let
  instance = create();

  instance.handle = handle;
  instance.show = show;
  instance.close = close;

  instance.element = update(element('section'), {
    class: 'modal anchor'
  });

  instance.h1 = update(element('h1'), {
    parent: instance.element,
    text: data(handle.element, 'h1')
  });

  data(handle.element, 'h1', null);

  instance.closer = update(element('button'), {
    class: 'closer',
    text: '×',
    onClick: close.bind(instance),
    parent: instance.element
  });

  instance.labels = create();
  instance.inputs = create();

  instance.labels.text = update(element('label'), {
    parent: instance.element,
    text: data(handle.element, 'text')
  });

  data(handle.element, 'text', null);

  instance.inputs.text = update(element('input'), {
    parent: instance.labels.text,
    value: text(handle.element),
    onKeyUp: function (event) {
      html(handle.element, event.target.value);
    }
  });

  onEnter(instance.inputs.text, nextOrClose);

  instance.labels.title = update(element('label'), {
    parent: instance.element,
    text: data(handle.element, 'title')
  });

  data(handle.element, 'title', null);

  instance.inputs.title = update(element('input'), {
    parent: instance.labels.title,
    value: handle.element.title,
    onKeyUp: function (event) {
      attr(handle.element, 'title', event.target.value);
    }
  });

  onEnter(instance.inputs.title, nextOrClose);

  instance.labels.href = update(element('label'), {
    parent: instance.element,
    text: data(handle.element, 'href')
  });

  data(handle.element, 'href', null);

  instance.inputs.href = update(element('input'), {
    parent: instance.labels.href,
    value: attr(handle.element, 'href'),
    onKeyUp: function (event) {
      attr(handle.element, 'href', event.target.value);
    }
  });

  onEnter(instance.inputs.href, nextOrClose);

  return instance;
}

function show(event) {
  if (event) {
    prevent(event);
  }

  append(this.element, one('main'));
  focus(this.inputs.text);
}

function focus(input) {
  input.focus();
  input.selectionStart = input.selectionEnd = input.value.length;
}

function close() {
  let
  inputs = this.inputs,
  text = inputs.text.value,
  title = inputs.title.value,
  href = inputs.href.value;

  if (!text.length || !title.length || !href.length) {
    remove(this.handle.element);
  }

  remove(this.element);
}

function nextOrClose(event) {
  let
  target = event.target,
  modal = closest('.modal', target),
  inputs = all('input', modal),
  next = inputs[indexOf(inputs, target) + 1];

  prevent(event);

  if (next) {
    return focus(next);
  }

  one('.closer', modal).click();
}

export function listenA(element) {
  onClick(element, show.bind(handle(element).tooltip));
}