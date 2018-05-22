import { isText } from 'anticore/dom/info/isText'
import { nodeName } from 'anticore/dom/info/nodeName'
import { closest } from 'anticore/dom/query/closest'
import { firstElement } from 'anticore/dom/query/firstElement'
import { parent } from 'anticore/dom/query/parent'

export function isFirstLi (node) {
  if (!node) {
    return false
  }

  if (isText(node)) {
    node = closest('li', node)
  }

  return nodeName(node) === 'li' &&
    firstElement(parent(node)) === node
}
