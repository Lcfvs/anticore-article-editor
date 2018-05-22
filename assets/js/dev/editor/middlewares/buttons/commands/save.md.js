import { anticore } from 'anticore'
import { onClick } from 'anticore/dom/emitter/on/onClick'
import { prevent } from 'anticore/dom/emitter/prevent'
import { closest } from 'anticore/dom/query/closest'
import { one } from 'anticore/dom/query/one'
import { clone } from 'anticore/dom/tree/clone'
import { clean } from '../../../dom/tree/clean'

function onClickEvent (event) {
  let
    form = closest('form', event.target),
    article = one('article', form),
    container

  clean(article)
  container = clone(article, true)

  form.elements.article.value = container.outerHTML
  prevent(event)
  console.log(form.elements.article.value.replace(/<br>/g, '<br />'))
}

anticore.on('form button:not([type])', function (element, next) {
  onClick(element, onClickEvent)

  next()
})
