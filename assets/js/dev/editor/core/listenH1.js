import {listenBack, listenEnter, listenShiftEnter} from '../dom/listeners';
import {closest, one} from '../dom/queries';
import {isEmpty} from '../dom/infos';
import {remove} from '../dom/shapers';

export function listenH1(element) {
  listenEnter(element, preventDefault, true);
  listenShiftEnter(element, preventDefault, true);
  listenBack(element, clean, true);
}

function preventDefault(event) {
  event.preventDefault();
}

function clean(event) {
  let
  target = event.target,
  section = closest('section', target);

  if (section && isEmpty(target)) {
    remove(section);
  }
}