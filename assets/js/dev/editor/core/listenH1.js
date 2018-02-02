import {listenBack} from 'anticore-tools/dom/listeners/listenBack';
import {listenEnter} from 'anticore-tools/dom/listeners/listenEnter';
import {listenShiftEnter} from 'anticore-tools/dom/listeners/listenShiftEnter';
import {closest} from 'anticore-tools/dom/queries/closest';
import {editables} from '../dom/queries/editables';
import {isEmpty} from 'anticore-tools/dom/infos/isEmpty';
import {next} from 'anticore-tools/dom/selection/next';
import {clean} from '../dom/shapers/clean';
import {remove} from 'anticore-tools/dom/shapers/remove';

export function listenH1(element) {
  listenEnter(element, onEnter, true);
  listenShiftEnter(element, preventDefault, true);
  listenBack(element, removeSection, true);
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

function removeSection(event) {
  let
  target = event.target,
  section = closest('section', target);

  clean(target);

  if (section && isEmpty(target)) {
    remove(section);
  }
}