import {clean} from '../../dom/tree/clean';
import {remove} from 'anticore/dom/tree/remove';
import {isFirstP} from '../../dom/info/isFirstP';

export function onBlurEvent(event) {
  let
  target = event.target;

  if (clean(target) && !isFirstP(target)) {
    remove(target);
  }
}