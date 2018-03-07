import {onEnter} from 'anticore/dom/emitter/on/onEnter/index';
import {isText} from 'anticore/dom/info/isText/index';
import {element} from 'anticore/dom/node/element/index';
import {nodes} from 'anticore/dom/query/nodes/index';
import {parent} from 'anticore/dom/query/parent/index';
import {current} from 'anticore/dom/selection/current/index';
import {append} from 'anticore/dom/tree/append/index';
import {appendAll} from 'anticore/dom/tree/appendAll/index';
import {attr} from 'anticore/dom/tree/attr/index';
import {data} from 'anticore/dom/tree/data/index';
import {html} from 'anticore/dom/tree/html/index';
import {remove} from 'anticore/dom/tree/remove/index';
import {text} from 'anticore/dom/tree/text/index';
import {update} from 'anticore/dom/tree/update/index';
import {curry} from 'anticore/primitive/function/curry/index';
import {create} from 'anticore/primitive/object/create/index';
import {cut} from '../../../tree/cut';
import {show} from '../show';
import {nextOrClose} from '../nextOrClose';

export function anchor(element) {
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

  return instance.tooltip.show;
}

function tooltip(handle) {
  let
  instance = create();

  instance.handle = handle;
  instance.show = curry(show, instance);
  instance.close = curry(close, instance);
  instance.nextOrClose = curry(nextOrClose, instance);

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
    onClick: instance.close,
    parent: instance.element
  });

  instance.labels = [];
  instance.inputs = [];

  instance.labels.text = update(element('label'), {
    parent: instance.element,
    text: data(handle.element, 'text')
  });
  instance.labels.push(instance.labels.text);

  data(handle.element, 'text', null);

  instance.inputs.text = update(element('input'), {
    parent: instance.labels.text,
    value: text(handle.element),
    onKeyUp: function (event) {
      html(handle.element, event.target.value);
    }
  });
  instance.inputs.push(instance.inputs.text);

  onEnter(instance.inputs.text, instance.nextOrClose);

  instance.labels.title = update(element('label'), {
    parent: instance.element,
    text: data(handle.element, 'title')
  });
  instance.labels.push(instance.labels.title);

  data(handle.element, 'title', null);

  instance.inputs.title = update(element('input'), {
    parent: instance.labels.title,
    value: handle.element.title,
    onKeyUp: function (event) {
      attr(handle.element, 'title', event.target.value);
    }
  });
  instance.inputs.push(instance.inputs.title);

  onEnter(instance.inputs.title, instance.nextOrClose);

  instance.labels.href = update(element('label'), {
    parent: instance.element,
    text: data(handle.element, 'href')
  });
  instance.labels.push(instance.labels.href);

  data(handle.element, 'href', null);

  instance.inputs.href = update(element('input'), {
    parent: instance.labels.href,
    value: attr(handle.element, 'href'),
    onKeyUp: function (event) {
      attr(handle.element, 'href', event.target.value);
    }
  });
  instance.inputs.push(instance.inputs.href);

  onEnter(instance.inputs.href, instance.nextOrClose);

  return instance;
}

function close(tooltip) {
  let
  inputs = tooltip.inputs,
  text = inputs.text.value,
  title = inputs.title.value,
  href = inputs.href.value;

  if (!text.length || !title.length || !href.length) {
    remove(tooltip.handle.element);
  }

  remove(tooltip.element);
}