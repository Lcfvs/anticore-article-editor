import {getLastDescendantOrSelf, getText, select} from '.';

export function selectEnd(node) {
  let
  last = getLastDescendantOrSelf(node);

  select(last, getText(last).length);

  return last;
}