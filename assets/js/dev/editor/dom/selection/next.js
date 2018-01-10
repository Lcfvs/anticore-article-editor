import {start} from './index';
import {indexOf} from '../../utils/index';

export function next(node, targets) {
  let
  key = indexOf(targets, node);

  while (node = targets[key += 1]) {
    if (node.parentNode) {
      return start(node);
    }
  }
}