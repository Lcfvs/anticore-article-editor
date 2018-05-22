import { anticore } from 'anticore'
import { onClick } from 'anticore/dom/emitter/on/onClick'

function onClickEvent (event) {

}

anticore.on('form article .options button.delete', function (element, next) {
  onClick(element, onClickEvent)

  next()
})
