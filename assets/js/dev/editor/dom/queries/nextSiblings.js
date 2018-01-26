import {indexOf, slice} from '../../utils';

export function nextSiblings(node) {
  let
  siblings = node.parentNode.childNodes;

  return slice(siblings, indexOf(siblings, node) + 1);
}