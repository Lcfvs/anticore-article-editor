import {listen} from '.';

export function listenLeft(element, listener, useCapture) {
  return listen('keydown', element, function(event) {
    if (event.which === 37) {
      return listener.call(this, event);
    }
  }, useCapture);
}