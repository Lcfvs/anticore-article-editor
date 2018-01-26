import {current, next} from '../../dom/selection';
import {clean, remove} from '../../dom/shapers';
import {text} from '../../dom/infos';
import {editables} from '../../dom/queries';

export function onRight(event) {
  let
  target = event.target,
  selection = current(),
  anchor = selection.anchorNode;

  if (!current().isCollapsed) {
    return;
  }

  if ([target, target.lastChild].indexOf(anchor) > -1 && selection.anchorOffset === text(anchor).length) {
    next(target, editables(target));

    if (clean(target)) {
      remove(target);
    }

    event.preventDefault();
  }
}