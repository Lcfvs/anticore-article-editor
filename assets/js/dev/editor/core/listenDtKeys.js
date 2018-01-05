import {
  clean,
  listen,
  nodeName
} from '../dom';

function onKeyDown(event) {
  if (event.which === 13) {
    event.preventDefault();
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

export function listenDtKeys(node) {
  listen('keydown', node, onKeyDown, true);
  listen('keyup', node, onKeyUp, true);
}