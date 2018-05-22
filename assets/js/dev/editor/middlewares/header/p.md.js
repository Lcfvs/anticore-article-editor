import { anticore } from 'anticore'
import { listenP } from '../../core/listenP'

anticore.on('header p[contenteditable=true]', function (element, next) {
  listenP(element)
  next()
})
