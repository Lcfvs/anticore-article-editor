import {current} from 'anticore/dom/selection/current';
import {start} from 'anticore/dom/selection/start';
import {starts} from 'anticore/dom/selection/starts';
import {before} from 'anticore/dom/tree/before';
import {listenP} from '../listenP';
import {clean} from '../../dom/tree/clean';
import {cut} from '../../dom/tree/cut';
import {isFirstP} from '../../dom/info/isFirstP';
import {nextElement} from 'anticore/dom/query/nextElement';
import {parent} from 'anticore/dom/query/parent';
import {prevent} from 'anticore/dom/emitter/prevent';

export function onEnterEvent(event) {
  let
  target = event.target,
  selection = current(),
  anchor = selection.anchorNode,
  offset = selection.anchorOffset,
  rest;

  prevent(event);

  if (!selection.isCollapsed) {
    return;
  }

  if (isFirstP(target) && starts(target)){
    return;
  }

  if (!offset && anchor === target) {
    return;
  }

  rest = cut(anchor, offset);
  rest.normalize();
  clean(target);
  clean(rest);
  listenP(rest);
  before(rest, nextElement(target), parent(target));
  start(rest);
}