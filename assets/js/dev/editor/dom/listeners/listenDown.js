import {listen} from '.';

export function listenDown(element, listener, useCapture) {
  return listen('keydown', element, function(event) {
    if (event.which === 40) {
      return listener.call(this, event);
    }
  }, useCapture);
}