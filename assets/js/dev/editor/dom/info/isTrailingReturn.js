import {nodeName} from 'anticore/dom/info/nodeName';
import {isEmpty} from 'anticore/dom/info/isEmpty';
import {parent} from 'anticore/dom/query/parent';
import {previousNode} from 'anticore/dom/query/previousNode';
import {nextNode} from 'anticore/dom/query/nextNode';
import {isReturn} from './isReturn';

export function isTrailingReturn(node) {
  return isReturn(node)
  && (nodeName(parent(node)) === 'h1' || isTrailing(previousNode(node)) || isTrailing(nextNode(node)));
}

function isTrailing(sibling) {
  return !sibling
  || isEmpty(sibling)
  || isReturn(sibling);
}