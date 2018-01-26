import {isCollapsedToNext} from '../../dom/infos';
import {appendAll, clean, remove} from '../../dom/shapers';

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