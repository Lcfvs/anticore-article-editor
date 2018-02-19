import {anchor} from 'anticore/dom/selection/anchor';
import {isCollapsed} from 'anticore/dom/selection/isCollapsed';
import {start} from 'anticore/dom/selection/start';
import {starts} from 'anticore/dom/selection/starts';
import {before} from 'anticore/dom/tree/before';
import {isFirstLi} from '../../dom/info/isFirstLi';
import {listenLi} from '../listenLi';
import {clean} from '../../dom/tree/clean';
import {cut} from '../../dom/tree/cut';
import {isFirstP} from '../../dom/info/isFirstP';
import {nextElement} from 'anticore/dom/query/nextElement';
import {parent} from 'anticore/dom/query/parent';
import {prevent} from 'anticore/dom/emitter/prevent';
import {isEmpty} from 'anticore/dom/info/isEmpty';

export function onEnterEvent(event) {
  let
  target = event.target,
  node = anchor.node(),
  offset = anchor.offset(),
  rest;

  prevent(event);

  if (isInvalid(target)) {
    return;
  }

  rest = cut(node, offset);
  rest.normalize();
  clean(target);
  clean(rest);
  listenLi(rest);
  before(rest, nextElement(target), parent(target));
  start(rest);
}

function isInvalid(target) {
  let
  node = anchor.node(),
  offset = anchor.offset();

  return !isCollapsed()
  || isEmpty(target)
  || isEmpty(node)
  || (isFirstLi(target) && starts(target))
  || (!offset && node === target);
}