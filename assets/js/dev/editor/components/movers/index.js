import { parent } from 'anticore/dom/query/parent'
import { one } from 'anticore/dom/query/one'
import { closestOrSelf } from 'anticore/dom/query/closestOrSelf'
import { nextElement } from 'anticore/dom/query/nextElement'
import { previousElement } from 'anticore/dom/query/previousElement'
import { element } from 'anticore/dom/node/element'
import { attr } from 'anticore/dom/tree/attr'
import { append } from 'anticore/dom/tree/append'
import { before } from 'anticore/dom/tree/before'
import { after } from 'anticore/dom/tree/after'
import { remove } from 'anticore/dom/tree/remove'
import { contains } from 'anticore/dom/info/contains'
import { matches } from 'anticore/dom/info/matches'
import { curry } from 'anticore/primitive/function/curry'
import { onClick } from 'anticore/dom/emitter/on/onClick'
import { onMouseOver } from 'anticore/dom/emitter/on/onMouseOver'

let container

export function movers (node) {
  if (!matches('form article > section', node)) {
    return
  }

  initContainer()
  onMouseOver(node.ownerDocument, hide)
  onMouseOver(node, show)
}

function initContainer () {
  if (container) {
    return
  }

  container = element('ol')
  attr(container, 'class', 'movers')
  createButton('up', up)
  createButton('remove', remove)
  createButton('down', down)
}

function createButton (className, listener) {
  const li = element('li')
  const button = element('button')

  attr(button, 'class', className)
  attr(button, 'type', 'button')
  append(button, li)
  append(li, container)
  onClick(button, listener)
}

function up (event) {
  const target = event.target
  const section = closestOrSelf('section', target)
  const previous = previousElement(section)

  before(section, previous)
  toggleButtons(target)
}

function down (event) {
  const target = event.target
  const section = closestOrSelf('section', target)
  const next = nextElement(section)

  after(section, next)
  toggleButtons(target)
}

function toggleButtons (target) {
  const section = closestOrSelf('section', target)
  const previous = previousElement(section)
  const next = nextElement(section)
  const down = one('.down', container)
  const up = one('.up', container)

  if (previous && matches('form article > section', previous)) {
    enable(up)
  } else {
    disable(up)
  }

  if (next && matches('form article > section', next)) {
    enable(down)
  } else {
    disable(down)
  }
}

function enable (element) {
  attr(element, 'disabled', null)
}

function disable (element) {
  attr(element, 'disabled', 'disabled')
}

function show (event) {
  if (!parent(container)) {
    const target = event.target
    const section = closestOrSelf('section', target)

    append(container, section)
    toggleButtons(target)
  }
}

function hide (event) {
  let target = event.target
  let section = closestOrSelf('section', target)

  if (!section || !contains(container, section)) {
    remove(container)
  }
}
