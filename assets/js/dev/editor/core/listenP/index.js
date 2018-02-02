import {listenBack} from 'anticore-tools/dom/listeners/listenBack';
import {listenBlur} from 'anticore-tools/dom/listeners/listenBlur';
import {listenDelete} from 'anticore-tools/dom/listeners/listenDelete';
import {listenEnter} from 'anticore-tools/dom/listeners/listenEnter';
import {listenLeft} from 'anticore-tools/dom/listeners/listenLeft';
import {listenRight} from 'anticore-tools/dom/listeners/listenRight';
import {listenShiftEnter} from 'anticore-tools/dom/listeners/listenShiftEnter';
import {onBlur} from './onBlur';
import {onEnter} from './onEnter';
import {onShiftEnter} from './onShiftEnter';
import {onBack} from './onBack';
import {onDelete} from './onDelete';
import {onLeft} from './onLeft';
import {onRight} from './onRight';

export function listenP(element) {
  listenBlur(element, onBlur, true);
  listenEnter(element, onEnter, true);
  listenShiftEnter(element, onShiftEnter, true);
  listenBack(element, onBack, true);
  listenDelete(element, onDelete, true);
  listenLeft(element, onLeft, true);
  listenRight(element, onRight, true);

  return element;
}