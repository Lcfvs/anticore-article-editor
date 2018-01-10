import {listen} from '.';

export function listenEnter(element, listener, useCapture) {
  return listen('keydown', element, function(event) {
    if (event.which === 13 && !event.shiftKey && !event.ctrlKey) {
      return listener.call(this, event);
    }
  }, useCapture);
}