import {listen} from '.';

export function listenBlur(element, listener, useCapture) {
  return listen('blur', element, listener, useCapture);
}