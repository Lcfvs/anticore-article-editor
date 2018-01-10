import {listen} from '.';

export function listenDelete(element, listener, useCapture) {
  return listen('keydown', element, function(event) {
    if (event.which === 46) {
      return listener.call(this, event);
    }
  }, useCapture);
}