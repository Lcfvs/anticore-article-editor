import { element } from 'anticore/dom/node/element'
import { lastNode } from 'anticore/dom/query/lastNode'
import { end } from 'anticore/dom/selection/end'
import { appendAll } from 'anticore/dom/tree/appendAll'
import { attr } from 'anticore/dom/tree/attr'
import { replace } from 'anticore/dom/tree/replace'
import { text } from 'anticore/dom/tree/text'
import { curry } from 'anticore/primitive/function/curry'
import { listenLi } from '../../core/listenLi'
import { OL_MATCHER, OL_REPLACER, UL_MATCHER, UL_REPLACER } from './patterns'

export function list (event) {
  let target = event.target
  let content = text(target).trim()

  if (content.match(OL_MATCHER)) {
    createList('ol', parseLines(OL_MATCHER, OL_REPLACER, content), target)
  } else {
    createList('ul', parseLines(UL_MATCHER, UL_REPLACER, content), target)
  }
}

function createList (tag, items, target) {
  let list = element(tag)

  appendAll(items, list)
  replace(list, target)
  end(lastNode(list))
}

function parseLines (matcher, replacer, content) {
  return content.match(matcher).map(curry(createItem, replacer))
}

function createItem (replacer, content) {
  let li = element('li')

  attr(li, 'contenteditable', true)
  listenLi(li)
  text(li, content.replace(replacer, ''))

  return li
}
