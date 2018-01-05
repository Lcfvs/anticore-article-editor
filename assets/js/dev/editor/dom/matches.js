import {all} from '.';

export function matches(selector, node) {
  let
  matches = all(selector, node.document || node.ownerDocument),
  i = matches.length;

  while (--i >= 0 && matches.item(i) !== this) {}

  return i > -1;
}