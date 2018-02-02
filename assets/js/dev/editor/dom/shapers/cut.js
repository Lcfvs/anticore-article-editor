import {closest} from 'anticore-tools/dom/queries/closest';
import {nextSiblings} from 'anticore-tools/dom/queries/nextSiblings';
import {isElement} from 'anticore-tools/dom/infos/isElement';
import {isText} from 'anticore-tools/dom/infos/isText';
import {isEmpty} from 'anticore-tools/dom/infos/isEmpty';
import {append} from 'anticore-tools/dom/shapers/append';
import {appendAll} from 'anticore-tools/dom/shapers/appendAll';
import {fragment} from 'anticore-tools/dom/shapers/fragment';

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