import { prevent } from 'anticore/dom/emitter/prevent'
import { firstNode } from 'anticore/dom/query/firstNode'
import { current } from 'anticore/dom/selection/current'
import { previous } from 'anticore/dom/selection/previous'
import { remove } from 'anticore/dom/tree/remove'
import { indexOf } from 'anticore/primitive/array/indexOf'
import { editables } from '../../dom/query/editables'
import { clean } from '../../dom/tree/clean'

export function onLeftEvent (event) {
  let
    target = event.target,
    selection = current(),
    anchor = selection.anchorNode,
    offset = selection.anchorOffset

  if (!current().isCollapsed) {
    return
  }

  if (indexOf([target, firstNode(target)], anchor) > -1 && !offset) {
    previous(target, editables(target))

    if (clean(target)) {
      remove(target)
    }

    prevent(event)
  }
}
