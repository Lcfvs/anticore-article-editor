import {onBlur} from 'anticore/dom/emitter/on/onBlur';
import {onEnter} from 'anticore/dom/emitter/on/onEnter';
import {onShiftEnter} from 'anticore/dom/emitter/on/onShiftEnter';
import {prevent} from 'anticore/dom/emitter/prevent';
import {closest} from 'anticore/dom/query/closest';
import {one} from 'anticore/dom/query/one';
import {attr} from 'anticore/dom/tree/attr';
import {text} from 'anticore/dom/tree/text';
import {clean} from '../../dom/tree/clean';
import {remove} from 'anticore/dom/tree/remove';
import {end} from 'anticore/dom/selection/end';

export function listenSummary(element) {
  onEnter(element, onEnterEvent, true);
  onShiftEnter(element, prevent, true);
  onBlur(element, removeDetails, true);
}

function onEnterEvent(event) {
  let
  target = event.target,
  details = closest('details', target);

  prevent(event);
  attr(details, 'open', true);
  end(one('summary + [contenteditable=true]', details));
}

function removeDetails(event) {
  let
  target = event.target,
  details = closest('details', target),
  section = closest('section', details);

  clean(section);

  if (!text(details).trim()) {
    remove(details);
  }

  if (!one('details', section)) {
    remove(section);
  }
}