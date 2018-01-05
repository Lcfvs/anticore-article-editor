import {selectEnd} from '.';
import {indexOf} from '../utils';

export function selectPrevious(node, tree) {
  let
  key = indexOf(tree, node) - 1;

  while (key) {
    node = tree[key];

    if (node.parentNode) {console.log(node)
      return selectEnd(node);
    }

    key -= 1;
  }
}