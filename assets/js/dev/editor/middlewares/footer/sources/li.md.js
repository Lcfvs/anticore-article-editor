import { anticore } from 'anticore'
import { global } from 'anticore/global'
import { all } from 'anticore/dom/query/all'
import { one } from 'anticore/dom/query/one'
import { parent } from 'anticore/dom/query/parent'
import { appendAll } from 'anticore/dom/tree/appendAll'
import { remove } from 'anticore/dom/tree/remove'
import { attr } from 'anticore/dom/tree/attr'
import { text } from 'anticore/dom/tree/text'
import { isEmpty } from 'anticore/dom/info/isEmpty'
import { forEach } from 'anticore/primitive/array/forEach'
import { indexOf } from 'anticore/primitive/array/indexOf'
import { listenLi } from '../../../core/listenLi'

const window = global()
const MutationObserver = window.MutationObserver

anticore.on('section.sources li[contenteditable=true]',
  function (element, next) {
    reorder(element)
    next()
  })

function onDelete (li, anchor) {
  let observer = new MutationObserver(function (mutations) {
    if (indexOf(mutations[0].removedNodes, anchor) > -1) {
      let ol = parent(li)
      remove(li)

      if (!ol) {
        return
      }

      if (isEmpty(ol)) {
        remove(parent(ol))
      } else {
        reorder(one('li', ol))
      }
    }
  })

  observer.observe(parent(anchor), {
    childList: true
  })
}

function reorder (element) {
  let
    anchors = all('article a[href^="#"]'),
    items = all('article footer .sources li'),
    ordered = [],
    index = 0

  forEach(anchors, function (anchor, key) {
    let
      item = element,
      id = 'source'.concat(key + 1)

    if (attr(anchor, 'href') !== '#') {
      item = items[index]
      index += 1
    }

    text(one('sup', anchor), key + 1)
    anchor.href = '#'.concat(id)
    item.id = id
    ordered.push(item)

    onDelete(item, anchor)
  })

  listenLi(element)

  setTimeout(function () {
    appendAll(ordered, one('article footer .sources ol'))
  }, 0)

}