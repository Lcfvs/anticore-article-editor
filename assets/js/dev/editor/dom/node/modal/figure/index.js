import {onEnter} from 'anticore/dom/emitter/on/onEnter/index';
import {element} from 'anticore/dom/node/element/index';
import {closestOrSelf} from 'anticore/dom/query/closestOrSelf/index';
import {one} from 'anticore/dom/query/one/index';
import {current} from 'anticore/dom/selection/current/index';
import {after} from 'anticore/dom/tree/after/index';
import {attr} from 'anticore/dom/tree/attr/index';
import {data} from 'anticore/dom/tree/data/index';
import {html} from 'anticore/dom/tree/html/index';
import {remove} from 'anticore/dom/tree/remove/index';
import {update} from 'anticore/dom/tree/update/index';
import {curry} from 'anticore/primitive/function/curry/index';
import {create} from 'anticore/primitive/object/create/index';
import {imageFromInput} from 'anticore/api/image/imageFromInput';
import {listenP} from '../../../../core/listenP';
import {show} from '../show';
import {nextOrClose} from '../nextOrClose';
import {onFile} from '../onFile';

export function figure(element) {
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

  return instance.tooltip.show;
}

function tooltip(handle) {
  let
  instance = create(),
  options = create();

  options.mime = 'image/jpeg';
  options.maxSize = 35000;
  options.quality = 1;
  options.width = 400;
  options.minHeight = 200;

  instance.handle = handle;
  instance.show = curry(show, instance);
  instance.close = curry(close, instance);
  instance.nextOrClose = curry(nextOrClose, instance);

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
    onClick: instance.close,
    parent: instance.element
  });

  instance.labels = [];
  instance.inputs = [];

  instance.labels.text = update(element('label'), {
    parent: instance.element,
    text: data(handle.caption, 'text')
  });
  instance.labels.push(instance.labels.text);

  data(handle.caption, 'text', null);

  instance.inputs.text = update(element('input'), {
    parent: instance.labels.text,
    onKeyUp: function (event) {
      html(handle.caption, event.target.value);
    }
  });
  instance.inputs.push(instance.inputs.text);

  onEnter(instance.inputs.text, instance.nextOrClose);

  instance.labels.alt = update(element('label'), {
    parent: instance.element,
    text: data(handle.img, 'alt')
  });
  instance.labels.push(instance.labels.alt);

  data(handle.img, 'alt', null);

  instance.inputs.alt = update(element('input'), {
    parent: instance.labels.alt,
    onKeyUp: function (event) {
      attr(handle.img, 'alt', event.target.value);
    }
  });
  instance.inputs.push(instance.inputs.alt);

  onEnter(instance.inputs.alt, instance.nextOrClose);

  instance.labels.src = update(element('label'), {
    parent: instance.element,
    text: data(handle.img, 'src')
  });
  instance.labels.push(instance.labels.src);

  data(handle.img, 'src', null);

  instance.inputs.src = update(element('input'), {
    parent: instance.labels.src,
    type: 'file',
    onKeyUp: function (event) {
      attr(handle.img, 'href', event.target.value);
    }
  });
  instance.inputs.push(instance.inputs.src);

  imageFromInput(curry(onFile, instance, options), instance.inputs.src);
  onEnter(instance.inputs.src, instance.nextOrClose);

  return instance;
}

function close(tooltip) {
  let
  inputs = tooltip.inputs,
  text = inputs.text.value,
  alt = inputs.alt.value,
  src = inputs.src.value,
  p;

  if (!text.length || !alt.length || !src.length) {
    remove(tooltip.handle.element);
  } else {
    p = element('p');

    listenP(p);

    after(update(p, {
      contenteditable: true
    }), tooltip.handle.element);
  }

  remove(tooltip.element);
}