import { prevent } from 'anticore/dom/emitter/prevent/index'
import { one } from 'anticore/dom/query/one/index'
import { focus } from 'anticore/dom/selection/focus'
import { append } from 'anticore/dom/tree/append/index'

export function show (tooltip, event) {
  if (event) {
    prevent(event)
  }

  append(tooltip.element, one('main'))
  focus(tooltip.inputs[0])
}
