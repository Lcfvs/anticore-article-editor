import { prevent } from 'anticore/dom/emitter/prevent'
import { isText } from 'anticore/dom/info/isText'
import { element } from 'anticore/dom/node/element'
import { nodes } from 'anticore/dom/query/nodes'
import { parent } from 'anticore/dom/query/parent'
import { current } from 'anticore/dom/selection/current'
import { previous } from 'anticore/dom/selection/previous'
import { starts } from 'anticore/dom/selection/starts'
import { attr } from 'anticore/dom/tree/attr'
import { appendAll } from 'anticore/dom/tree/appendAll'
import { remove } from 'anticore/dom/tree/remove'
import { replace } from 'anticore/dom/tree/replace'
import { text } from 'anticore/dom/tree/text/index'
import { isFirstLi } from '../../dom/info/isFirstLi'
import { editables } from '../../dom/query/editables'
import { clean } from '../../dom/tree/clean'
import { listenP } from '../listenP'

export function onBackEvent (event) {
  let
    target = event.target,
    selection = current(),
    anchor = selection.anchorNode,
    node

  if (!selection.isCollapsed) {
    return
  }

  if (!starts(target)) {
    return
  }

  if (!isFirstLi(target)) {
    node = previous(target, editables(target))

    if (node && anchor) {
      if (isText(node)) {
        node = parent(node)
      }

      appendAll(nodes(target), node)
      clean(node)
      remove(target)
    }
  } else {
    let list = parent(target)
    clean(list)

    if (!(text(list) || '').trim().length) {
      node = element('p')
      attr(node, 'contenteditable', true)
      listenP(node)
      replace(node, list)
    }
  }

  prevent(event)
}
