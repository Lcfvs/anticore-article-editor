import {all} from '.';

export function getClosest(selector, node) {
  let
  matches = all(selector, node.document || node.ownerDocument),
  i;

  do {
    i = matches.length;
    while (--i >= 0 && matches.item(i) !== node) {}
  } while ((i < 0) && (node = node.parentElement));

  return node;
}