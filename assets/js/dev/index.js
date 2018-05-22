import { anticore } from 'anticore'
import { onClick } from 'anticore/dom/emitter/on/onClick'
import { onSubmit } from 'anticore/dom/emitter/on/onSubmit'
import './editor'
import './log'
import './debug'

const a1 = ' a:not([download]):not([target]):not([href^="data:"])'
const a2 = ' a[target=_self]:not([download]):not([href^="data:"])'
const interactive = [
  'body > header' + a1,
  'body > header' + a2,
  'main > :not(form)' + a1,
  'main > :not(form)' + a2,
  'body > footer' + a1,
  'body > footer' + a2,
  'button[data-href]'
].join(',')

anticore.on(interactive, function (element, next) {
  onClick(element, anticore.fetchFromEvent)

  next()
})

anticore.on('form:not([target]),form[target=_self]', function (element, next) {
  onSubmit(element, anticore.cleanAndFetch)
  next()
})

anticore.fetchers.a =
anticore.fetchers.button = function (element) {
  return anticore.request(element.dataset.href || element.href, 'get', null,
    element)
}

anticore.populate()
