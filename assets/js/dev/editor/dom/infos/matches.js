import {all} from '../queries';
import {indexOf} from '../../utils';

export function matches(selector, node) {
  let
  current = node;

  while (current.parentNode) {
    if (indexOf(all(selector, current.parentNode), node) > -1) {
      return true;
    }

    current = current.parentNode;
  }

  return false;
}