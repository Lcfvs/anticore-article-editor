import { prevent } from 'anticore/dom/emitter/prevent'
import { isEmpty } from 'anticore/dom/info/isEmpty'
import { nextElement } from 'anticore/dom/query/nextElement'
import { parent } from 'anticore/dom/query/parent'
import { anchor } from 'anticore/dom/selection/anchor'
import { isCollapsed } from 'anticore/dom/selection/isCollapsed'
import { start } from 'anticore/dom/selection/start'
import { starts } from 'anticore/dom/selection/starts'
import { before } from 'anticore/dom/tree/before'
import { isFirstP } from '../../dom/info/isFirstP'
import { clean } from '../../dom/tree/clean'
import { cut } from '../../dom/tree/cut'
import { listenP } from '../listenP'

export function onEnterEvent (event) {
  let
    target = event.target,
    node = anchor.node(),
    offset = anchor.offset(),
    rest

  if (isInvalid(target)) {
    return prevent(event)
  }

  if (node !== target) {
    clean(target)

    return
  }

  rest = cut(node, offset)
  rest.normalize()
  clean(target)
  clean(rest)
  listenP(rest)
  before(rest, nextElement(target), parent(target))
  start(rest)
  prevent(event)
}

function isInvalid (target) {
  let
    node = anchor.node(),
    offset = anchor.offset()

  return !isCollapsed() ||
    isEmpty(target) ||
    isEmpty(node) ||
    ( isFirstP(target) && starts(target) ) ||
    ( !offset && node === target )
}
