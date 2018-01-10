import {listen} from '.';

export function listenRight(element, listener, useCapture) {
  return listen('keydown', element, function(event) {
    if (event.which === 39) {
      return listener.call(this, event);
    }
  }, useCapture);
}