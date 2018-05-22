import { anticore } from 'anticore'
import { listenLi } from '../../../core/listenLi'

anticore.on('section.tags li[contenteditable=true]', function (element, next) {
  listenLi(element)
  next()
})
