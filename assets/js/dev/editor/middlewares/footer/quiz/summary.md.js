import { anticore } from 'anticore'
import { listenSummary } from '../../../core/listenSummary'

anticore.on('section.quiz summary', function (element, next) {
  listenSummary(element)

  next()
})
