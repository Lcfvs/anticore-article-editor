import {current} from 'anticore/dom/selection/current';
import {next} from 'anticore/dom/selection/next';
import {clean} from '../../dom/tree/clean';
import {remove} from 'anticore/dom/tree/remove';
import {text} from 'anticore/dom/tree/text';
import {indexOf} from 'anticore/primitive/array/indexOf';
import {editables} from '../../dom/query/editables';
import {prevent} from 'anticore/dom/emitter/prevent';

export function onRightEvent(event) {
  let
  target = event.target,
  selection = current(),
  anchor = selection.anchorNode,
  offset = selection.anchorOffset;

  if (!current().isCollapsed) {
    return;
  }

  if (indexOf([target, target.lastChild], anchor) > -1 && offset === text(anchor).length) {
    next(target, editables(target));

    if (clean(target)) {
      remove(target);
    }

    prevent(event);
  }
}