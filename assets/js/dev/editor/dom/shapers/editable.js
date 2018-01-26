import {element} from './element';

export function editable(nodeName) {
  return element(nodeName, {
    contentEditable: true
  });
}