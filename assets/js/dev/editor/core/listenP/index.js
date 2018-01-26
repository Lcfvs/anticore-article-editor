import {
  listenBack,
  listenBlur,
  listenDelete,
  listenEnter,
  listenLeft,
  listenRight,
  listenShiftEnter
} from '../../dom/listeners';
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