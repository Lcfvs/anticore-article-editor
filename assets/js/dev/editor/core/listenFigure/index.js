import {onBack} from 'anticore/dom/emitter/on/onBack/index';
import {onBlur} from 'anticore/dom/emitter/on/onBlur/index';
import {onEnter} from 'anticore/dom/emitter/on/onEnter/index';
import {onDelete} from 'anticore/dom/emitter/on/onDelete/index';
import {onLeft} from 'anticore/dom/emitter/on/onLeft/index';
import {onRight} from 'anticore/dom/emitter/on/onRight/index';
import {prevent} from 'anticore/dom/emitter/prevent';
import {onBackEvent} from './onBackEvent';
import {onBlurEvent} from './onBlurEvent';
import {onDeleteEvent} from './onDeleteEvent';
import {onLeftEvent} from './onLeftEvent';
import {onRightEvent} from './onRightEvent';

export function listenFigure(element) {
  onBlur(element, onBlurEvent, true);
  onEnter(element, prevent, true);
  onBack(element, onBackEvent, true);
  onDelete(element, onDeleteEvent, true);
  onLeft(element, onLeftEvent, true);
  onRight(element, onRightEvent, true);

  return element;
}