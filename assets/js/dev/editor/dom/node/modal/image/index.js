import {onEnter} from 'anticore/dom/emitter/on/onEnter/index';
import {element} from 'anticore/dom/node/element/index';
import {attr} from 'anticore/dom/tree/attr/index';
import {data} from 'anticore/dom/tree/data/index';
import {remove} from 'anticore/dom/tree/remove/index';
import {update} from 'anticore/dom/tree/update/index';
import {curry} from 'anticore/primitive/function/curry/index';
import {create} from 'anticore/primitive/object/create/index';
import {imageFromInput} from 'anticore/api/image/imageFromInput';
import {show} from '../show';
import {nextOrClose} from '../nextOrClose';
import {onFile} from '../onFile';

export function image(element) {
  let
  instance = create();

  instance.element = element;
  instance.tooltip = tooltip(instance);

  return instance.tooltip.show;
}

function tooltip(handle) {
  let
  instance = create(),
  options = create();

  options.mime = 'image/jpeg';
  options.maxSize = 35000;
  options.quality = 1;
  options.width = 48;
  options.height = 48;

  instance.handle = handle;
  instance.show = curry(show, instance);
  instance.close = curry(close, instance);
  instance.nextOrClose = curry(nextOrClose, instance);

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
    onClick: instance.close,
    parent: instance.element
  });

  instance.labels = [];
  instance.inputs = [];

  instance.labels.alt = update(element('label'), {
    parent: instance.element,
    text: data(handle.element, 'alt')
  });
  instance.labels.push(instance.labels.alt);

  data(handle.element, 'alt', null);

  instance.inputs.alt = update(element('input'), {
    parent: instance.labels.alt,
    onKeyUp: function (event) {
      attr(handle.element, 'alt', event.target.value);
    }
  });
  instance.inputs.push(instance.inputs.alt);

  onEnter(instance.inputs.alt, instance.nextOrClose);

  instance.labels.src = update(element('label'), {
    parent: instance.element,
    text: data(handle.element, 'src')
  });
  instance.labels.push(instance.labels.src);

  data(handle.element, 'src', null);

  instance.inputs.src = update(element('input'), {
    parent: instance.labels.src,
    type: 'file',
    onKeyUp: function (event) {
      attr(handle.element, 'href', event.target.value);
    }
  });
  instance.inputs.push(instance.inputs.src);

  imageFromInput(instance.inputs.src, curry(onFile, instance, options));
  onEnter(instance.inputs.src, instance.nextOrClose);

  return instance;
}

function close(tooltip) {
  let
  inputs = tooltip.inputs,
  alt = inputs.alt.value,
  src = inputs.src.value;

  if (!alt.length || !src.length) {
    attr(tooltip.handle.element, 'alt', null);
    attr(tooltip.handle.element, 'src', null);
  }

  remove(tooltip.element);
}