import { element } from 'anticore/dom/node/element'
import { one } from 'anticore/dom/query/one'
import { before } from 'anticore/dom/tree/before'

export function menu () {
  const
    MENU = element('ol'),
    ARTICLE = one('form article')

  before(MENU, ARTICLE)

  return MENU
}
