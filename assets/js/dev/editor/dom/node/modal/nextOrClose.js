import { prevent } from 'anticore/dom/emitter/prevent/index'
import { indexOf } from 'anticore/primitive/array/indexOf/index'

export function nextOrClose (tooltip, event) {
  let
    target = event.target,
    next = tooltip.labels[indexOf(tooltip.inputs, target) + 1]

  prevent(event)

  if (next) {
    return next.click()
  }

  tooltip.close()
}
