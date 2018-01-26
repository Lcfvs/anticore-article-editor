import {create} from '../../utils';
import {one} from '../../dom/queries';
import {element} from '../../dom/shapers';

const
handle = create();

handle.create = function (element) {
  let
  instance = create();

  instance.element = element;
  instance.href = element.href;
  instance.text = element.textContent;
  instance.title = element.title;

  return instance;
};

handle.tooltip = create();

handle.tooltip.create = function (handle) {
  let
  instance = create();

  instance.handle = handle;
  instance.element = element('span', {
    class: 'anchorHandle'
  });

  instance.closer = element('button', {
    class: 'closer',
    text: '×',
    onClick: instance.close.bind(instance),
    parent: instance.element
  });

  instance.labels = create();

  instance.labels.title = function () {

  }
};

handle.tooltip.show = function () {
  this.handle.element.appendChild(this.element);
};

handle.tooltip.close = function () {
  this.handle.element.removeChild(this.element);
};


export function listenA(element) {

}