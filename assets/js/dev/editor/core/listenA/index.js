import {create} from 'anticore/primitive/object/create';
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
import {cut} from '../../dom/tree/cut';

function handle(element) {
  let
  instance = create(),
  selection = current(),
  anchor = selection.anchorNode,
  siblings = nodes(cut(anchor, selection.anchorOffset)),
  target = anchor;

  instance.element = element;
  instance.tooltip = tooltip(instance);
  append(instance.tooltip.element, one('main'));

  if (isText(anchor)) {
    target = parent(anchor);
  }

  append(element, target);
  appendAll(siblings, target);

  return instance;
}

function tooltip(handle) {
  let
  instance = create();

  instance.handle = handle;
  instance.show = show;
  instance.close = close;

  instance.element = update(element('span'), {
    class: 'modal anchorHandle'
  });

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

  instance.labels.url = update(element('label'), {
    parent: instance.element,
    text: data(handle.element, 'url')
  });

  data(handle.element, 'url', null);

  instance.inputs.url = update(element('input'), {
    parent: instance.labels.url,
    value: attr(handle.element, 'href'),
    onKeyUp: function (event) {
      attr(handle.element, 'href', event.target.value);
    }
  });

  return instance;
}

function show(event) {
  if (event) {
    event.preventDefault();
  }

  append(this.element, one('main'));
}

function close() {
  let
  inputs = this.inputs,
  text = inputs.text.value,
  title = inputs.title.value,
  url = inputs.url.value;

  if (!text.length || !title.length || !url.length) {
    remove(this.handle.element);
  }

  remove(this.element);
}

export function listenA(element) {
  onClick(element, show.bind(handle(element).tooltip));
}