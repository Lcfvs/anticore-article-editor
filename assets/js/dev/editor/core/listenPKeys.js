import {
  clean,
  insertEditable,
  listen
} from '../dom';

function onKeyDown(event) {
  let
  key = event.which,
  target = event.target,
  isEmpty;

  if (key === 13) {
    isEmpty = clean('article', target, target);

    if (isEmpty || !event.shiftKey) {
      event.preventDefault();

      if (!isEmpty) {
        listenPKeys(insertEditable('p', target.nextSibling, target.parentNode));
      }
    }

    return;
  }
}

function onKeyUp(event) {
  let
  key = event.which,
  target = event.target;

  if (key === 8) {
    clean('article', target);

    return;
  }
}

export function listenPKeys(node) {
  listen('keydown', node, onKeyDown, true);
  listen('keyup', node, onKeyUp, true);
}