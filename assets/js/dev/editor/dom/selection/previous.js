import {indexOf} from '../../utils/index';
import {end} from './index';

export function previous(node, targets) {
  let
  key = indexOf(targets, node);

  while (node = targets[key -= 1]) {
    if (node.parentNode) {
      return end(node);
    }
  }
}