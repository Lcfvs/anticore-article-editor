import {isCollapsedToNext} from '../../dom/infos/isCollapsedToNext';
import {clean} from '../../dom/shapers/clean';
import {remove} from 'anticore-tools/dom/shapers/remove';
import {appendAll} from 'anticore-tools/dom/shapers/appendAll';

export function onDelete(event) {
  let
  target = event.target,
  next = target.nextElementSibling;

  if (isCollapsedToNext(event)) {
    appendAll(next.childNodes, target);
    clean(target);
    remove(next);
    event.preventDefault();

    return;
  }
}