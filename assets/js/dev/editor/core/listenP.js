import {
  listenBack, listenDelete, listenEnter, listenFocus, listenLeft, listenRight,
  listenShiftEnter
} from '../dom/listeners';
import {appendAll, clean, insertClone, remove} from '../dom/shapers';
import {current, next, previous} from '../dom/selection';
import {registry} from '../registry';
import {isCollapseToNext, isCollapseToPrevious, isEmpty, isFirstP, isText, text} from '../dom/infos';
import {editables, one} from '../dom/queries';
import {indexOf, slice} from '../utils';

export function listenP(element) {
  listenFocus(element, onFocus, true);
  listenEnter(element, onEnter, true);
  listenShiftEnter(element, onShiftEnter, true);
  listenBack(element, onBack, true);
  listenDelete(element, onDelete, true);
  listenLeft(element, onLeft, true);
  listenRight(element, onRight, true);

  return element;
}

function onFocus(event) {
  let
  focused = registry.focused,
  target = event.target;

  if (!isFirstP(target) && focused) {
    if (clean(focused)) {
      previous(focused, editables(target));
      remove(focused);
    }
  }

  registry.focused = target;
}

function onEnter(event) {
  let
  target = event.target,
  document = one(),
  selection = current(),
  anchor = selection.anchorNode,
  offset = selection.anchorOffset,
  nodes = target.childNodes;

  event.preventDefault();

  if ((!isFirstP(target) || !isEmpty(target)) && !clean(target)) {
    nodes = slice(nodes, indexOf(nodes, anchor));

    if (offset && isText(nodes[0])) {
      nodes[0] = document.createTextNode(text(anchor).substr(offset).trim());
      anchor.nodeValue = text(anchor).substr(0, offset).trim();
    }

    appendAll(nodes, listenP(insertClone(target)));
  }
}

function onShiftEnter(event) {
  let
  target = event.target;

  if (clean(target)) {
    event.preventDefault();
  }
}

function onBack(event) {
  let
  target = event.target;

  if (!current().isCollapsed) {
    return;
  }

  if (isCollapseToPrevious(event)) {
    clean(target);
    event.preventDefault();
    previous(target, editables(target));
    appendAll(target.childNodes, target.previousElementSibling);
    remove(target);

    return;
  }

  if (clean(target)) {
    event.preventDefault();
    previous(target, editables(target));
    remove(target);

    return;
  }
}

function onDelete(event) {
  let
  target = event.target,
  next = target.nextElementSibling;

  if (!current().isCollapsed) {
    return;
  }

  if (isCollapseToNext(event)) {
    appendAll(next.childNodes, target);
    remove(next);
    event.preventDefault();

    return;
  }
}

function onLeft(event) {
  let
  target = event.target,
  selection = current();

  if (!current().isCollapsed) {
    return;
  }

  if ([target, target.firstChild].indexOf(selection.anchorNode) > -1 && !selection.anchorOffset) {
    previous(target, editables(target));

    if (clean(target)) {
      remove(target);
    }

    event.preventDefault();
  }
}

function onRight(event) {
  let
  target = event.target,
  selection = current(),
  anchor = selection.anchorNode;

  if (!current().isCollapsed) {
    return;
  }

  if ([target, target.lastChild].indexOf(anchor) > -1 && selection.anchorOffset === text(anchor).length) {
    next(target, editables(target));

    if (clean(target)) {
      remove(target);
    }

    event.preventDefault();
  }
}