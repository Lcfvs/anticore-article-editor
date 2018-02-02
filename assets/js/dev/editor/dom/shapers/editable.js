import {element} from 'anticore-tools/dom/shapers/element';

export function editable(nodeName) {
  return element(nodeName, {
    contentEditable: true
  });
}