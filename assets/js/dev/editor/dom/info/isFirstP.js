import { isText } from 'anticore/dom/info/isText'
import { nodeName } from 'anticore/dom/info/nodeName'
import { closest } from 'anticore/dom/query/closest'
import { firstElement } from 'anticore/dom/query/firstElement'
import { parent } from 'anticore/dom/query/parent'

export function isFirstP (node) {
  if (!node) {
    return false
  }

  if (isText(node)) {
    node = closest('p', node)
  }

  return nodeName(node) === 'p' &&
    firstElement(parent(node)) === node
}
