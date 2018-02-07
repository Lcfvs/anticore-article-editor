import {onBack} from 'anticore/dom/emitter/on/onBack';
import {onEnter} from 'anticore/dom/emitter/on/onEnter';
import {onShiftEnter} from 'anticore/dom/emitter/on/onShiftEnter';
import {closest} from 'anticore/dom/query/closest';
import {editables} from '../dom/query/editables';
import {isEmpty} from 'anticore/dom/info/isEmpty';
import {next} from 'anticore/dom/selection/next';
import {clean} from '../dom/tree/clean';
import {remove} from 'anticore/dom/tree/remove';

export function listenH1(element) {
  onEnter(element, onEnterEvent, true);
  onShiftEnter(element, preventDefault, true);
  onBack(element, removeSection, true);
}

function onEnterEvent(event) {
  let
  target = event.target;

  preventDefault(event);
  next(target, editables(target));
}

function preventDefault(event) {
  event.preventDefault();
}

function removeSection(event) {
  let
  target = event.target,
  section = closest('section', target);

  clean(target);

  if (section && isEmpty(target)) {
    remove(section);
  }
}