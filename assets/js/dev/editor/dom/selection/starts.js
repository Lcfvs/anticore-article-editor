import {current} from '.';

export function starts(node) {
  let
  selection = current(),
  anchor = selection.anchorNode,
  offset = selection.anchorOffset;

  if (offset || !node.contains(anchor)) {
    return false;
  }

  while (anchor) {
    if (anchor.parentNode.firstChild !== anchor) {
      return false;
    }

    if (anchor === node || anchor === node.firstChild) {
      return true;
    }

    anchor = anchor.parentNode;
  }

  return false;
}