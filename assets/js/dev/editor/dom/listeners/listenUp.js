import {listen} from '.';

export function listenUp(element, listener, useCapture) {
  return listen('keydown', element, function(event) {
    if (event.which === 38) {
      return listener.call(this, event);
    }
  }, useCapture);
}