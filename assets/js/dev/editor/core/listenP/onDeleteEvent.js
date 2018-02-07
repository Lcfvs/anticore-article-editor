import {isCollapsedToNext} from '../../dom/info/isCollapsedToNext';
import {clean} from '../../dom/tree/clean';
import {remove} from 'anticore/dom/tree/remove';
import {appendAll} from 'anticore/dom/tree/appendAll';
import {nextElement} from 'anticore/dom/query/nextElement';
import {nodes} from 'anticore/dom/query/nodes';

export function onDeleteEvent(event) {
  let
  target = event.target,
  next = nextElement(target);

  if (isCollapsedToNext(event)) {
    appendAll(nodes(next), target);
    clean(target);
    remove(next);
    event.preventDefault();

    return;
  }
}