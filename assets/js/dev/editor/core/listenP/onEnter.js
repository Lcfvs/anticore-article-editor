import {current, start, starts} from '../../dom/selection';
import {listenP} from '../listenP';
import {clean, cut, insert} from '../../dom/shapers';
import {isFirstP} from '../../dom/infos';

export function onEnter(event) {
  let
  target = event.target,
  selection = current(),
  anchor = selection.anchorNode,
  offset = selection.anchorOffset,
  rest;

  event.preventDefault();

  if (!selection.isCollapsed) {
    return;
  }

  if (isFirstP(target) && starts(target)){console.log(1)
    return;
  }

  if (!offset && anchor === target) {console.log(2)
    return;
  }
  console.log(3)
  rest = cut(anchor, offset);
  rest.normalize();
  clean(target);
  clean(rest);
  listenP(rest);
  insert(rest, target.nextElementSibling, target.parentNode);
  start(rest);
}