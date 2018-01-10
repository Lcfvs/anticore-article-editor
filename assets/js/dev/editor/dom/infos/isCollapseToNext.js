import {current} from '../selection';
import {hasSameNodeName, text} from '.';

export function isCollapseToNext(event) {
  let
  target = event.target,
  selection = current(),
  focused = selection.focusNode,
  last = target.lastChild,
  next = target.nextElementSibling;

  return next
  && selection.isCollapsed
  && hasSameNodeName(target, next)
  && selection.focusOffset === text(last).length
  && last === focused;
}