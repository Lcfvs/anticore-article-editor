import { anticore } from 'anticore'
import { listenFigure } from '../../core/listenFigure'

anticore.on('figure', function (element, next) {
  listenFigure(element)
  next()
})
