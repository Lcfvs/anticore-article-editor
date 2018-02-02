import {current} from 'anticore-tools/dom/selection/current';
import {previous} from 'anticore-tools/dom/selection/previous';
import {clean} from '../../dom/shapers/clean';
import {remove} from 'anticore-tools/dom/shapers/remove';
import {editables} from '../../dom/queries/editables';

export function onLeft(event) {
  let
  target = event.target,
  selection = current(),
  anchor = selection.anchorNode,
  offset = selection.anchorOffset;

  if (!current().isCollapsed) {
    return;
  }

  if ([target, target.firstChild].indexOf(anchor) > -1 && !offset) {
    previous(target, editables(target));

    if (clean(target)) {
      remove(target);
    }

    event.preventDefault();
  }
}