import { on } from 'anticore/dom/emitter/on'
import { text } from 'anticore/dom/tree/text'
import { OL_MATCHER, UL_MATCHER } from '../../../../components/list/patterns'

export function onListPrefix (element, listener, useCapture) {
  return on('keydown', element, function (event) {
    let
      content = text(event.target).trim()

    if (OL_MATCHER.test(content) || UL_MATCHER.test(content)) {
      return listener.call(this, event)
    }
  }, useCapture)
}
