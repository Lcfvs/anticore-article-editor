import {listen} from '.';

export function listenClick(element, listener, useCapture) {
  return listen('click', element, listener, useCapture);
}