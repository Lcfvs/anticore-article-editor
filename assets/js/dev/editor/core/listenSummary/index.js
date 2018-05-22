import { onBlur } from 'anticore/dom/emitter/on/onBlur'
import { onClick } from 'anticore/dom/emitter/on/onClick'
import { onEnter } from 'anticore/dom/emitter/on/onEnter'
import { onShiftEnter } from 'anticore/dom/emitter/on/onShiftEnter'
import { onSpace } from 'anticore/dom/emitter/on/onSpace'
import { prevent } from 'anticore/dom/emitter/prevent'
import { closest } from 'anticore/dom/query/closest'
import { one } from 'anticore/dom/query/one'
import { end } from 'anticore/dom/selection/end'
import { insert } from 'anticore/dom/selection/insert/index'
import { attr } from 'anticore/dom/tree/attr'
import { remove } from 'anticore/dom/tree/remove'
import { text } from 'anticore/dom/tree/text'
import { clean } from '../../dom/tree/clean'

let
  spaceFired = false

export function listenSummary (element) {
  onEnter(element, onEnterEvent, true)
  onShiftEnter(element, prevent, true)
  onBlur(element, removeDetails, true)
  onSpace(element, onSpaceEvent, true)
  onClick(element, onClickEvent, true)
}

function onSpaceEvent (event) {
  spaceFired = true
  prevent(event)
  insert(' ')
}

function onClickEvent (event) {
  if (spaceFired) {
    prevent(event)
    spaceFired = false

    return false
  }
}

function onEnterEvent (event) {
  let
    target = event.target,
    details = closest('details', target)

  prevent(event)
  attr(details, 'open', true)
  end(one('summary + [contenteditable=true]', details))
}

function removeDetails (event) {
  let
    target = event.target,
    details = closest('details', target),
    section = closest('section', details)

  text(target, text(target).replace(/ /g, ' '))
  clean(section)

  if (!text(details).trim()) {
    remove(details)
  }

  if (!one('details', section)) {
    remove(section)
  }
}
