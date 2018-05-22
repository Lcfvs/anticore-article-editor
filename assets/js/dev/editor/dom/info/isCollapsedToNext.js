import { lastNode } from 'anticore/dom/query/lastNode'
import { nextElement } from 'anticore/dom/query/nextElement'
import { current } from 'anticore/dom/selection/current'
import { text } from 'anticore/dom/tree/text'
import { hasSameNodeName } from './hasSameNodeName'

export function isCollapsedToNext (event) {
  let
    target = event.target,
    selection = current(),
    focused = selection.focusNode,
    last = lastNode(target),
    next = nextElement(target)

  return next &&
    selection.isCollapsed &&
    hasSameNodeName(target, next) &&
    selection.focusOffset === text(last).length &&
    last === focused
}
