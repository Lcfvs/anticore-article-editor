import {current} from 'anticore-tools/dom/selection/current';
import {hasSameNodeName} from './hasSameNodeName';
import {text} from 'anticore-tools/dom/infos/text';

export function isCollapsedToNext(event) {
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