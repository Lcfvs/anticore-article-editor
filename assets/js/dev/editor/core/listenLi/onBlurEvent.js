import {clean} from '../../dom/tree/clean';
import {remove} from 'anticore/dom/tree/remove';
import {isFirstLi} from '../../dom/info/isFirstLi';

export function onBlurEvent(event) {
  let
  target = event.target;

  if (!clean(target) || isFirstLi(target)) {
    return;
  }

  remove(target);
}