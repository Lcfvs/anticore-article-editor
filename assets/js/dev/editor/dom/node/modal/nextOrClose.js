import {prevent} from 'anticore/dom/emitter/prevent/index';
import {all} from 'anticore/dom/query/all/index';
import {indexOf} from 'anticore/primitive/array/indexOf/index';
import {focus} from './focus';

export function nextOrClose(tooltip, event) {
  let
  target = event.target,
  inputs = all('input', tooltip.element),
  next = inputs[indexOf(inputs, target) + 1];

  prevent(event);

  if (next) {
    return focus(next);
  }

  tooltip.close();
}