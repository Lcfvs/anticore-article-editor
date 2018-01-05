import {one, getSelection} from '.';

export function select(node, start, end) {
  let
  range = one().createRange(),
  selection = getSelection();

  range.selectNodeContents(node);

  if (Number.isInteger(start)) {
    range.setStart(node, start);
  }

  if (Number.isInteger(end)) {
    range.setEnd(node, end);
  }

  selection.removeAllRanges();
  selection.addRange(range);

  return node;
}