import {clean} from '../../dom/shapers/clean';
import {remove} from 'anticore-tools/dom/shapers/remove';
import {isFirstP} from '../../dom/infos/isFirstP';

export function onBlur(event) {
  let
  target = event.target;

  if (clean(target) && !isFirstP(target)) {
    remove(target);
  }
}