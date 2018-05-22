import { anticore } from 'anticore'
import { onClick } from 'anticore/dom/emitter/on/onClick'
import { one } from 'anticore/dom/query/one'
import { current } from 'anticore/dom/selection/current'
import { isHeadingNode } from '../../../dom/info/isHeadingNode'

function onClickEvent (event) {
  let
    selection = current()

  if (isHeadingNode(selection.anchorNode)) {
    return
  }

  if (isHeadingNode(selection.focusNode)) {
    return
  }

  // @todo enable/disable button
  one().execCommand('bold')
}

anticore.on('form.editor .options button.bold', function (element, next) {
  onClick(element, onClickEvent)

  next()
})
