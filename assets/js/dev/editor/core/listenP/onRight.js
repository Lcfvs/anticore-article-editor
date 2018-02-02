import {current} from 'anticore-tools/dom/selection/current';
import {next} from 'anticore-tools/dom/selection/next';
import {clean} from '../../dom/shapers/clean';
import {remove} from 'anticore-tools/dom/shapers/remove';
import {text} from 'anticore-tools/dom/infos/text';
import {editables} from '../../dom/queries/editables';

export function onRight(event) {
  let
  target = event.target,
  selection = current(),
  anchor = selection.anchorNode,
  offset = selection.anchorOffset;

  if (!current().isCollapsed) {
    return;
  }

  if ([target, target.lastChild].indexOf(anchor) > -1 && offset === text(anchor).length) {
    next(target, editables(target));

    if (clean(target)) {
      remove(target);
    }

    event.preventDefault();
  }
}