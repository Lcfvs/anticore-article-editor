import { prevent } from 'anticore/dom/emitter/prevent'
import { isText } from 'anticore/dom/info/isText'
import { nodeName } from 'anticore/dom/info/nodeName'
import { nodes } from 'anticore/dom/query/nodes'
import { parent } from 'anticore/dom/query/parent'
import { current } from 'anticore/dom/selection/current'
import { previous } from 'anticore/dom/selection/previous'
import { starts } from 'anticore/dom/selection/starts'
import { appendAll } from 'anticore/dom/tree/appendAll'
import { remove } from 'anticore/dom/tree/remove'
import { indexOf } from 'anticore/primitive/array/indexOf'
import { isFirstP } from '../../dom/info/isFirstP'
import { isHeadingNode } from '../../dom/info/isHeadingNode'
import { editables } from '../../dom/query/editables'
import { clean } from '../../dom/tree/clean'

export function onBackEvent (event) {
  let
    target = event.target,
    selection = current(),
    anchor = selection.anchorNode,
    offset = selection.anchorOffset,
    node

  if (!selection.isCollapsed) {
    return
  }

  if ((!offset && isText(anchor)) || (anchor === target && offset)) {
    if (!offset) {
      anchor = parent(anchor)
    }

    let childNodes = nodes(anchor)

    offset = offset || indexOf(childNodes, selection.anchorNode)
    let textNode = childNodes[offset]

    if (isText(textNode)) {console.log(2)
      let previousNode = childNodes[offset - 1]

      if (nodeName(previousNode) === 'a') {console.log(3)
        remove(previousNode)

        return prevent(event)
      }
    }
  }

  if (!starts(target)) {
    return
  }

  if (!isFirstP(target)) {
    node = previous(target, editables(target))

    if (node && !isHeadingNode(node) && anchor) {
      if (isText(node)) {
        node = parent(node)
      }

      appendAll(nodes(target), node)
      clean(node)
      remove(target)
    }
  }

  prevent(event)
}
