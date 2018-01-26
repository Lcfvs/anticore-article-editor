import {closest, nextSiblings} from '../queries';
import {isElement, isEmpty, isText} from '../infos';
import {append, appendAll} from '.';
import {fragment} from './fragment';

export function cut(target, offset) {
  let
  editable = closest('[contenteditable=true]', target);

  return recurse(editable, target, offset);
}

function recurse(parent, target, offset) {
  let
  clone,
  current,
  next,
  siblings;

  if (!parent) {
    return fragment();
  }

  clone = parent.cloneNode(false);
  current = parent.firstChild;

  while (current && !clone.contains(current)) {
    next = current.nextSibling;

    if (!isEmpty(current)) {
      siblings = nextSiblings(current);

      if (isText(current) && current === target) {
        append(extractText(current, offset), clone);
        appendAll(siblings, clone);
      } else if (isElement(current) && current.contains(target)) {
        append(recurse(current, target, offset), clone);
        appendAll(siblings, clone);
      }
    }

    current = next;
  }

  return clone;
}

function extractText(node, offset) {
  let
  clone = node.cloneNode(true);

  clone.nodeValue = clone.nodeValue.substr(offset);
  node.nodeValue = node.nodeValue.substr(0, offset);

  return clone;
}