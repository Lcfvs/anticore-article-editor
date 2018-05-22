import { matches } from 'anticore/dom/info/matches'
import { remove } from 'anticore/dom/tree/remove'
import { isFirstP } from '../../dom/info/isFirstP'
import { clean } from '../../dom/tree/clean'

const
  selector = 'form article section p:first-of-type'

export function onBlurEvent (event) {
  let
    target = event.target

  if (!clean(target) || isFirstP(target) || matches(selector, target)) {
    return
  }

  remove(target)
}
