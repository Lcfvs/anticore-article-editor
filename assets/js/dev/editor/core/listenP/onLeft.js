import {current, previous} from '../../dom/selection';
import {clean, remove} from '../../dom/shapers';
import {editables} from '../../dom/queries';

export function onLeft(event) {
  let
  target = event.target,
  selection = current();

  if (!current().isCollapsed) {
    return;
  }

  if ([target, target.firstChild].indexOf(selection.anchorNode) > -1 && !selection.anchorOffset) {
    previous(target, editables(target));

    if (clean(target)) {
      remove(target);
    }

    event.preventDefault();
  }
}