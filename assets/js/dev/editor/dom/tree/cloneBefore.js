import { nextNode } from 'anticore/dom/query/nextNode'
import { parent } from 'anticore/dom/query/parent'
import { start } from 'anticore/dom/selection/start'
import { before } from 'anticore/dom/tree/before'
import { clone } from 'anticore/dom/tree/clone'

export function cloneBefore (node, deep) {
  let
    clone = clone(node, deep)

  before(clone, nextNode(node), parent(node))
  start(clone)

  return clone
}
