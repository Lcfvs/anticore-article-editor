import {clean, remove} from '../../dom/shapers';
import {isFirstP} from '../../dom/infos';

export function onBlur(event) {
  let
  target = event.target;

  if (clean(target) && !isFirstP(target)) {
    remove(target);
  }
}