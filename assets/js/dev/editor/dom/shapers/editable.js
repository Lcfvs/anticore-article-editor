import {one} from '../queries';

export function editable(nodeName) {
  let
  node = one().createElement(nodeName);

  node.contentEditable = true;

  return node;
}