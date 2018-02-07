import {onBack} from 'anticore/dom/emitter/on/onBack';
import {onBlur} from 'anticore/dom/emitter/on/onBlur';
import {onDelete} from 'anticore/dom/emitter/on/onDelete';
import {onEnter} from 'anticore/dom/emitter/on/onEnter';
import {onLeft} from 'anticore/dom/emitter/on/onLeft';
import {onRight} from 'anticore/dom/emitter/on/onRight';
import {onShiftEnter} from 'anticore/dom/emitter/on/onShiftEnter';
import {onBlurEvent} from './onBlurEvent';
import {onEnterEvent} from './onEnterEvent';
import {onShiftEnterEvent} from './onShiftEnterEvent';
import {onBackEvent} from './onBackEvent';
import {onDeleteEvent} from './onDeleteEvent';
import {onLeftEvent} from './onLeftEvent';
import {onRightEvent} from './onRightEvent';

export function listenP(element) {
  onBlur(element, onBlurEvent, true);
  onEnter(element, onEnterEvent, true);
  onShiftEnter(element, onShiftEnterEvent, true);
  onBack(element, onBackEvent, true);
  onDelete(element, onDeleteEvent, true);
  onLeft(element, onLeftEvent, true);
  onRight(element, onRightEvent, true);

  return element;
}