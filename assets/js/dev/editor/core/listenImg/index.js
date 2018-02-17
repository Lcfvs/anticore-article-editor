import {indexOf} from 'anticore/primitive/array/indexOf';
import {create} from 'anticore/primitive/object/create';
import {closestOrSelf} from 'anticore/dom/query/closestOrSelf';
import {all} from 'anticore/dom/query/all';
import {one} from 'anticore/dom/query/one';
import {element} from 'anticore/dom/node/element';
import {current} from 'anticore/dom/selection/current';
import {append} from 'anticore/dom/tree/append';
import {after} from 'anticore/dom/tree/after';
import {attr} from 'anticore/dom/tree/attr';
import {data} from 'anticore/dom/tree/data';
import {update} from 'anticore/dom/tree/update';
import {remove} from 'anticore/dom/tree/remove';
import {onClick} from 'anticore/dom/emitter/on/onClick';
import {onEnter} from 'anticore/dom/emitter/on/onEnter';
import {onLoad} from 'anticore/dom/emitter/on/onLoad';
import {onFileInput} from 'anticore/dom/emitter/on/onFileInput';
import {prevent} from 'anticore/dom/emitter/prevent';
import ImageCompressor from 'image-compressor.js';

function handle(element) {
  let
  instance = create();

  instance.element = element;
  instance.tooltip = tooltip(instance);

  return instance;
}

function tooltip(handle) {
  let
  instance = create();

  instance.handle = handle;
  instance.show = show;
  instance.close = close;

  instance.element = update(element('section'), {
    class: 'modal img'
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

  instance.labels.alt = update(element('label'), {
    parent: instance.element,
    text: data(handle.element, 'alt')
  });

  data(handle.element, 'alt', null);

  instance.inputs.alt = update(element('input'), {
    parent: instance.labels.alt,
    onKeyUp: function (event) {
      attr(handle.element, 'alt', event.target.value);
    }
  });

  onEnter(instance.inputs.alt, nextOrClose);

  instance.labels.src = update(element('label'), {
    parent: instance.element,
    text: data(handle.element, 'src')
  });

  data(handle.element, 'src', null);

  instance.inputs.src = update(element('input'), {
    parent: instance.labels.src,
    type: 'file',
    onKeyUp: function (event) {
      attr(handle.element, 'href', event.target.value);
    }
  });

  onFileInput(instance.inputs.src, onFileInputEvent.bind(instance));
  onEnter(instance.inputs.src, nextOrClose);

  return instance;
}

function onFileInputEvent(event) {
  new ImageCompressor((event.dataTransfer || event.target).files[0], {
    maxWidth: 48,
    maxHeight: 48,
    minWidth: 48,
    convertSize: 10000,
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
  this.handle.element.src = event.target.result;
  close.call(this);
}

function show(event) {
  if (event) {
    prevent(event);
  }

  append(this.element, one('main'));
  focus(this.inputs.alt);
}

function focus(input) {
  input.focus();
  input.selectionStart = input.selectionEnd = input.value.length;
}

function close() {
  let
  inputs = this.inputs,
  alt = inputs.alt.value,
  src = inputs.src.value;

  if (!alt.length || !src.length) {
    attr(this.handle.element, 'alt', null);
    attr(this.handle.element, 'src', null);
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

export function listenImg(element) {
  onClick(element, show.bind(handle(element).tooltip));
}