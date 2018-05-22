import { firstNode } from 'anticore/dom/query/firstNode'
import { previousElement } from 'anticore/dom/query/previousElement'
import { current } from 'anticore/dom/selection/current'
import { hasSameNodeName } from './hasSameNodeName'

export function isCollapseToPrevious (event) {
  let
    target = event.target,
    selection = current(),
    focused = selection.focusNode,
    first = firstNode(target),
    previous = previousElement(target)

  return previous &&
    selection.isCollapsed &&
    hasSameNodeName(target, previous) &&
    !selection.focusOffset &&
    ( first === focused || first === firstNode(focused) )
}
