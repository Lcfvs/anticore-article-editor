import {all, getClosest, matches} from '.';

export function getClosestOrMatches(selector, node) {
  return matches(selector, node)
  ? node
  : getClosest(selector, node);
}