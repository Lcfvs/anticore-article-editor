import { onBack } from 'anticore/dom/emitter/on/onBack'
import { onEnter } from 'anticore/dom/emitter/on/onEnter'
import { onShiftEnter } from 'anticore/dom/emitter/on/onShiftEnter'
import { prevent } from 'anticore/dom/emitter/prevent'
import { isEmpty } from 'anticore/dom/info/isEmpty'
import { matches } from 'anticore/dom/info/matches'
import { closest } from 'anticore/dom/query/closest'
import { next } from 'anticore/dom/selection/next'
import { remove } from 'anticore/dom/tree/remove'
import { editables } from '../../dom/query/editables'
import { clean } from '../../dom/tree/clean'

export function listenH1 (element) {
  onEnter(element, onEnterEvent, true)
  onShiftEnter(element, prevent, true)

  if (matches('article > section h1', element)) {
    onBack(element, removeSection, true)
  }
}

function onEnterEvent (event) {
  let
    target = event.target

  prevent(event)
  next(target, editables(target))
}

function removeSection (event) {
  let
    target = event.target,
    section = closest('section', target)

  clean(target)

  if (section && isEmpty(target)) {
    remove(section)
  }
}
