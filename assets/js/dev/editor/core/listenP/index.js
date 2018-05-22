import { onBack } from 'anticore/dom/emitter/on/onBack'
import { onBlur } from 'anticore/dom/emitter/on/onBlur'
import { onDelete } from 'anticore/dom/emitter/on/onDelete'
import { onEnter } from 'anticore/dom/emitter/on/onEnter'
import { onLeft } from 'anticore/dom/emitter/on/onLeft'
import { onRight } from 'anticore/dom/emitter/on/onRight'
import { onListPrefix } from '../../dom/emitter/on/onListPrefix'
import { onBackEvent } from './onBackEvent'
import { onBlurEvent } from './onBlurEvent'
import { onDeleteEvent } from './onDeleteEvent'
import { onEnterEvent } from './onEnterEvent'
import { onLeftEvent } from './onLeftEvent'
import { onListPrefixInput } from './onListPrefixInput'
import { onRightEvent } from './onRightEvent'

export function listenP (element) {
  onBlur(element, onBlurEvent, true)
  onEnter(element, onEnterEvent, true)
  onBack(element, onBackEvent, true)
  onDelete(element, onDeleteEvent, true)
  onLeft(element, onLeftEvent, true)
  onRight(element, onRightEvent, true)
  onListPrefix(element, onListPrefixInput, true)

  return element
}
