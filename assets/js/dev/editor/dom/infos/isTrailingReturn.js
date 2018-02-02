import {nodeName} from 'anticore-tools/dom/infos/nodeName';
import {isEmpty} from 'anticore-tools/dom/infos/isEmpty';

export function isTrailingReturn(node) {
  return isBr(node)
  && (nodeName(node.parentNode) === 'h1' || isTrailing(node.previousSibling) || isTrailing(node.nextSibling));
}

function isTrailing(sibling) {
  return !sibling
  || isEmpty(sibling)
  || isBr(sibling);
}

function isBr(node) {
  return nodeName(node) === 'br';
}