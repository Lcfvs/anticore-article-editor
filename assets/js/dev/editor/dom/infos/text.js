import {isElement} from '.';

export function text(node) {
  return isElement(node)
  ? node.textContent
  : node.nodeValue;
}