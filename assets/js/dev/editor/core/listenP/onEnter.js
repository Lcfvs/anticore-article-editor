import {current} from 'anticore-tools/dom/selection/current';
import {start} from 'anticore-tools/dom/selection/start';
import {starts} from 'anticore-tools/dom/selection/starts';
import {insert} from 'anticore-tools/dom/shapers/insert';
import {listenP} from '../listenP';
import {clean} from '../../dom/shapers/clean';
import {cut} from '../../dom/shapers/cut';
import {isFirstP} from '../../dom/infos/isFirstP';

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
  insert(rest, target.nextElementSibling, target.parentNode);
  start(rest);
}