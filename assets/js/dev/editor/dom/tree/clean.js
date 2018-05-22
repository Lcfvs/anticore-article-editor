import { isEmpty } from 'anticore/dom/info/isEmpty'
import { remove } from 'anticore/dom/tree/remove'
import { forEach } from 'anticore/primitive/array/forEach'
import { isTrailingReturn } from '../info/isTrailingReturn'
import { isTrailingStyle } from '../info/isTrailingStyle'
import { returns } from '../query/returns'
import { styles } from '../query/styles'

export function clean (node) {
  forEach(styles(node), removeTrailingStyle)
  forEach(returns(node), removeTrailingReturn)

  return isEmpty(node)
}

function removeTrailingStyle (node) {
  if (isTrailingStyle(node)) {
    remove(node)
  }

  node.normalize()
}

function removeTrailingReturn (node) {
  if (isTrailingReturn(node)) {
    remove(node)
  }

  node.normalize()
}
