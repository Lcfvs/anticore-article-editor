import { element } from 'anticore/dom/node/element'
import { update } from 'anticore/dom/tree/update'

export function editable (nodeName) {
  return update(element(nodeName), {
    contentEditable: true,
  })
}
