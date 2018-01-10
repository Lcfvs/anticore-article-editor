import {one} from '../queries';
import {current} from '.';

export function select(node, start, end) {
  let
  range = one().createRange(),
  selection = current();

  range.selectNodeContents(node);

  if (Number.isInteger(start)) {
    range.setStart(node, start);
  }

  if (Number.isInteger(end)) {
    range.setEnd(node, end);
  }

  selection.removeAllRanges();
  selection.addRange(range);

  if (!Number.isInteger(start)) {
    selection.collapseToEnd();
  }

  if (!Number.isInteger(end)) {
    selection.collapseToStart();
  }

  return node;
}