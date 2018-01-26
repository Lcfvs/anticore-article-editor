import {clean} from '../../dom/shapers';

export function onShiftEnter(event) {
  let
  target = event.target;

  if (clean(target)) {
    event.preventDefault();
  }
}