import {current, previous, starts} from '../../dom/selection';
import {isFirstP, isHeadingNode} from '../../dom/infos';
import {appendAll, clean, remove} from '../../dom/shapers';
import {editables} from '../../dom/queries';

export function onBack(event) {
  let
  target = event.target,
  selection = current(),
  anchor = selection.anchorNode,
  node;

  if (!selection.isCollapsed) {
    return;
  }

  if (!starts(target)) {
    return;
  }

  if (!isFirstP(target)) {
    node = previous(target, editables(target));

    if (node && !isHeadingNode(node) && anchor) {
      appendAll(target.childNodes, node);
      clean(node);
      remove(target);
    }
  }

  event.preventDefault();
}