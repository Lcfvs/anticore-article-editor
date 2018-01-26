import {matches} from '../infos';
import {closest} from '.';

export function closestOrSelf(selector, node) {
  return matches(selector, node)
    ? node
    : closest(selector, node);
}