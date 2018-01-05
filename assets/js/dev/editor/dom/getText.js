import {isElement} from '.';

export function getText(node) {
  return isElement(node)
  ? node.textContent
  : node.nodeValue;
}