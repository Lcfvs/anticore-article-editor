import {indexOf} from 'anticore/primitive/array/indexOf';
import {create} from 'anticore/primitive/object/create';
import {closestOrSelf} from 'anticore/dom/query/closestOrSelf';
import {all} from 'anticore/dom/query/all';
import {one} from 'anticore/dom/query/one';
import {nodes} from 'anticore/dom/query/nodes';
import {parent} from 'anticore/dom/query/parent';
import {element} from 'anticore/dom/node/element';
import {current} from 'anticore/dom/selection/current';
import {matches} from 'anticore/dom/info/matches';
import {isText} from 'anticore/dom/info/isText';
import {append} from 'anticore/dom/tree/append';
import {appendAll} from 'anticore/dom/tree/appendAll';
import {after} from 'anticore/dom/tree/after';
import {attr} from 'anticore/dom/tree/attr';
import {data} from 'anticore/dom/tree/data';
import {update} from 'anticore/dom/tree/update';
import {html} from 'anticore/dom/tree/html';
import {text} from 'anticore/dom/tree/text';
import {remove} from 'anticore/dom/tree/remove';
import {onClick} from 'anticore/dom/emitter/on/onClick';
import {onEnter} from 'anticore/dom/emitter/on/onEnter';
import {onLoad} from 'anticore/dom/emitter/on/onLoad';
import {onFileInput} from 'anticore/dom/emitter/on/onFileInput';
import {prevent} from 'anticore/dom/emitter/prevent';
import ImageCompressor from 'image-compressor.js';

function handle(element) {
  let
  instance = create(),
  selection = current(),
  target = closestOrSelf('[contenteditable=true]', selection.anchorNode);

  instance.element = element;
  instance.caption = one('figcaption', element);
  instance.img = one('img', element);
  instance.tooltip = tooltip(instance);

  after(element, target);

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
    class: 'modal figure'
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
    text: data(handle.caption, 'text')
  });

  data(handle.caption, 'text', null);

  instance.inputs.text = update(element('input'), {
    parent: instance.labels.text,
    onKeyUp: function (event) {
      html(handle.caption, event.target.value);
    }
  });

  onEnter(instance.inputs.text, nextOrClose);

  instance.labels.alt = update(element('label'), {
    parent: instance.element,
    text: data(handle.img, 'alt')
  });

  data(handle.img, 'alt', null);

  instance.inputs.alt = update(element('input'), {
    parent: instance.labels.alt,
    onKeyUp: function (event) {
      attr(handle.img, 'alt', event.target.value);
    }
  });

  onEnter(instance.inputs.alt, nextOrClose);

  instance.labels.src = update(element('label'), {
    parent: instance.element,
    text: data(handle.img, 'src')
  });

  data(handle.img, 'src', null);

  instance.inputs.src = update(element('input'), {
    parent: instance.labels.src,
    type: 'file',
    onKeyUp: function (event) {
      attr(handle.img, 'href', event.target.value);
    }
  });

  onFileInput(instance.inputs.src, onFileInputEvent.bind(instance));
  onEnter(instance.inputs.src, nextOrClose);

  return instance;
}

function onFileInputEvent(event) {
  new ImageCompressor((event.dataTransfer || event.target).files[0], {
    maxWidth: 718,
    maxHeight: 446,
    minWidth: 718,
    minHeight: 446,
    quality: .6,
    success: onCompressed.bind(this, event.target),
    error: function(error) {
      console.log(error)
    }
  });
}

function onCompressed(element, result) {
  let
  reader = new FileReader();

  reader.readAsDataURL(result);
  onLoad(reader, onLoadEvent.bind(this, element));
}

function onLoadEvent(element, event) {
  this.handle.img.src = event.target.result;
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
  alt = inputs.alt.value,
  src = inputs.src.value;

  if (!text.length || !alt.length || !src.length) {
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

export function listenFigure(element) {
  onClick(element, show.bind(handle(element).tooltip));
}