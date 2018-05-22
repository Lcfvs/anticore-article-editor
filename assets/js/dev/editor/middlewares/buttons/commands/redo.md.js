import { anticore } from 'anticore'
import { onClick } from 'anticore/dom/emitter/on/onClick'

function onClickEvent (event) {
  event.target.ownerDocument.execCommand('redo')
}

anticore.on('form article .options button.redo', function (element, next) {
  onClick(element, onClickEvent)

  next()
})
