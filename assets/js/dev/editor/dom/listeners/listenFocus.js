import {listen} from '.';

export function listenFocus(element, listener, useCapture) {
  return listen('focus', element, listener, useCapture);
}