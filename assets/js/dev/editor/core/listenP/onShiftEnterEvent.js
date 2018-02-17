import {clean} from '../../dom/tree/clean';
import {prevent} from 'anticore/dom/emitter/prevent';

export function onShiftEnterEvent(event) {
  let
  target = event.target;

  if (clean(target)) {
    prevent(event);
  }
}