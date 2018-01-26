import {listen} from '.';

export function listenSubmit(element, listener, useCapture) {
  return listen('submit', element, listener, useCapture);
}