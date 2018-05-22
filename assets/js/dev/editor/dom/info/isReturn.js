import { nodeName } from 'anticore/dom/info/nodeName/index'

export function isReturn (node) {
  return node &&
    nodeName(node) === 'br'
}
