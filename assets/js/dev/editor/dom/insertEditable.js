import {one, insert, select} from '.';

export function insertEditable(nodeName, next, parent) {
  let
  node = one().createElement(nodeName);

  node.contentEditable = true;

  return select(insert(node, next, parent));
}