import {isElement} from '.';

export function isEmpty(node) {
  return isElement(node) && !node.textContent.trim().length;
}