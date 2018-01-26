import {listenBack, listenEnter, listenShiftEnter} from '../dom/listeners';
import {closest, editables} from '../dom/queries';
import {isEmpty} from '../dom/infos';
import {remove} from '../dom/shapers';
import {next} from '../dom/selection';

export function listenH1(element) {
  listenEnter(element, onEnter, true);
  listenShiftEnter(element, preventDefault, true);
  listenBack(element, clean, true);
}

function onEnter(event) {
  let
  target = event.target;

  preventDefault(event);
  next(target, editables(target));
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