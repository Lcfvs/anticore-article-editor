import {listen} from '.';

export function listenBack(element, listener, useCapture) {
  return listen('keydown', element, function(event) {
    if (event.which === 8 && !event.shiftKey && !event.ctrlKey) {
      return listener.call(this, event);
    }
  }, useCapture);
}