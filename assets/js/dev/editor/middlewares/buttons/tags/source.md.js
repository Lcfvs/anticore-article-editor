import { anticore } from 'anticore'
import { onClick } from 'anticore/dom/emitter/on/onClick'
import { prevent } from 'anticore/dom/emitter/prevent'
import { element } from 'anticore/dom/node/element'
import { closest } from 'anticore/dom/query/closest'
import { closestOrSelf } from 'anticore/dom/query/closestOrSelf'
import { anchor } from 'anticore/dom/selection/anchor'
import { current } from 'anticore/dom/selection/current'
import { isCollapsed } from 'anticore/dom/selection/isCollapsed'
import { append } from 'anticore/dom/tree/append'
import { update } from 'anticore/dom/tree/update'

function onClickEvent (event) {
  const node = anchor.node()
  const toPrevent = (
    !isCollapsed() ||
    !closestOrSelf('[contenteditable=true]', node) ||
    closestOrSelf('h1, a', node) ||
    !closest('article > section', node)
  )

  if (toPrevent) {
    return prevent(event)
  }

  insertAnchor()
}

function insertAnchor () {
  const anchor = element('a')
  const sup = element('sup')

  append(sup, anchor)

  insert(update(anchor, {
    contenteditable: false,
    href: '#'
  }))
}

function insert (node) {
  const selection = current()
  const range = selection.getRangeAt(0)

  range.deleteContents()
  range.insertNode(node)
  selection.collapseToEnd()

  return selection
}

anticore.on('form.editor .options button.source', function (element, next) {
  onClick(element, onClickEvent)

  next()
})
