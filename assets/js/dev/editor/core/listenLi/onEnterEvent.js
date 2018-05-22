import { prevent } from 'anticore/dom/emitter/prevent'
import { isEmpty } from 'anticore/dom/info/isEmpty'
import { matches } from 'anticore/dom/info/matches'
import { elements } from 'anticore/dom/query/elements'
import { element } from 'anticore/dom/node/element'
import { attr } from 'anticore/dom/tree/attr'
import { nextElement } from 'anticore/dom/query/nextElement'
import { lastNode } from 'anticore/dom/query/lastNode'
import { parent } from 'anticore/dom/query/parent'
import { anchor } from 'anticore/dom/selection/anchor'
import { isCollapsed } from 'anticore/dom/selection/isCollapsed'
import { start } from 'anticore/dom/selection/start'
import { starts } from 'anticore/dom/selection/starts'
import { focus } from 'anticore/dom/selection/focus'
import { before } from 'anticore/dom/tree/before'
import { after } from 'anticore/dom/tree/after'
import { remove } from 'anticore/dom/tree/remove'
import { isFirstLi } from '../../dom/info/isFirstLi'
import { clean } from '../../dom/tree/clean'
import { cut } from '../../dom/tree/cut'
import { listenLi } from '../listenLi'
import { listenP } from '../listenP'

export function onEnterEvent (event) {
  let
    target = event.target,
    node = anchor.node(),
    offset = anchor.offset(),
    rest

  prevent(event)

  if (isEmpty(target) && matches('form article > section li + li', target)) {
    let list = parent(target)

    if (lastNode(list) === target) {
      let p = element('p')

      attr(p, 'contenteditable', true)
      after(p, list)
      listenP(p)
      remove(target)
      focus(p)

      return
    }
  }

  if (isInvalid(target)) {
    return
  }

  rest = cut(node, offset)
  rest.normalize()
  clean(target)
  clean(rest)
  listenLi(rest)
  before(rest, nextElement(target), parent(target))
  start(rest)
}

function isInvalid (target) {
  let
    node = anchor.node(),
    offset = anchor.offset(),
    list = parent(target)

  return !isCollapsed() ||
    isEmpty(target) ||
    isEmpty(node) ||
    (isFirstLi(target) && starts(target)) ||
    (!offset && node === target) ||
    matches('form article > footer > .tags ul', list) && elements(list).length >
    5
}
