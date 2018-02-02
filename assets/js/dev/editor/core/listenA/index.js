import {create} from 'anticore-tools/utils/object/create';
import {one} from 'anticore-tools/dom/queries/one';
import {element} from 'anticore-tools/dom/shapers/element';
import {current} from 'anticore-tools/dom/selection/current';
import {isText} from 'anticore-tools/dom/infos/isText';

function handle(element) {
  let
  instance = create(),
  selection = current(),
  anchor = selection.anchorNode;

  instance.element = element;
  instance.tooltip = tooltip(instance);
  instance.position = selection.getRangeAt(0).getBoundingClientRect();

  if (isText(anchor)) {
    anchor.parentNode.appendChild(element);
  } else {
    anchor.appendChild(element);
  }

  instance.tooltip.element.style.top = instance.position.y + 'px';
  instance.tooltip.element.style.left = instance.position.x + 'px';
  one('main').appendChild(instance.tooltip.element);

  return instance;
}

function tooltip(handle) {
  let
  instance = create();

  instance.handle = handle;
  instance.show = show;
  instance.close = close;

  instance.element = element('span', {
    class: 'anchorHandle'
  });

  instance.closer = element('button', {
    class: 'closer',
    text: '×',
    onClick: close.bind(instance),
    parent: instance.element
  });

  instance.labels = create();
  instance.inputs = create();

  instance.labels.text = element('label', {
    parent: instance.element,
    text: data(handle.element, 'text')
  });

  instance.inputs.text = element('input', {
    parent: instance.labels.text,
    value: handle.element.textContent,
    onKeyUp: function (event) {
      handle.element.innerHTML = event.target.value;
    }
  });

  instance.labels.title = element('label', {
    parent: instance.element,
    text: data(handle.element, 'title')
  });

  instance.inputs.title = element('input', {
    parent: instance.labels.title,
    value: handle.element.title,
    onKeyUp: function (event) {
      handle.element.title = event.target.value;
    }
  });

  instance.labels.url = element('label', {
    parent: instance.element,
    text: data(handle.element, 'url')
  });

  instance.inputs.url = element('input', {
    parent: instance.labels.url,
    value: handle.element.href,
    onKeyUp: function (event) {
      handle.element.href = event.target.value;
    }
  });

  return instance;
}

function show() {
  this.handle.element.appendChild(this.element);
}

function close() {
  this.handle.element.removeChild(this.element);
}

function data(element, name) {
  let
  value = element.dataset[name];

  element.removeAttribute('data-' + name);

  return value;
}

export function listenA(element) {
console.log(handle(element));
}