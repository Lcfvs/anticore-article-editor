import {current} from '../selection';
import {hasSameNodeName} from './index';

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