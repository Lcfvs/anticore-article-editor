import {current} from 'anticore-tools/dom/selection/current';
import {hasSameNodeName} from './hasSameNodeName';

export function isCollapseToPrevious(event) {

  let
  target = event.target,
  selection = current(),
  focused = selection.focusNode,
  first = target.firstChild,
  previous = target.previousElementSibling;

  return previous
  && selection.isCollapsed
  && hasSameNodeName(target, previous)
  && !selection.focusOffset
  && (first === focused || first === focused.firstChild);
}