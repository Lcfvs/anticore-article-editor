import {indexOf} from '../../utils/index';
import {end} from './index';
import {closest} from '../queries';

export function previous(node, targets) {
  let
  key = indexOf(targets, node);

  while (node = targets[key -= 1]) {
    if (node.parentNode) {
      return closest('[contenteditable=true]', end(node));
    }
  }
}