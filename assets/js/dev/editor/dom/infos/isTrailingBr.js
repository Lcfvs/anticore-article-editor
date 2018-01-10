import {nodeName} from '.';

export function isTrailingBr(node) {
  return isBr(node)
  && (!node.previousSibling
  || !node.nextSibling
  || isBr(node.previousSibling)
  || isBr(node.nextSibling));
}

function isBr(node) {
  return nodeName(node) === 'br';
}