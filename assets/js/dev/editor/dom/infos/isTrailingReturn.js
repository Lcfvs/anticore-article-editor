import {nodeName} from '.';
import {isEmpty} from './isEmpty';

export function isTrailingReturn(node) {
  return isBr(node)
  && (isTrailing(node.previousSibling) || isTrailing(node.nextSibling));
}

function isTrailing(sibling) {
  return !sibling
  || isEmpty(sibling)
  || isBr(sibling);
}

function isBr(node) {
  return nodeName(node) === 'br';
}