import {clean} from '../../dom/tree/clean';

export function onShiftEnterEvent(event) {
  let
  target = event.target;

  if (clean(target)) {
    event.preventDefault();
  }
}