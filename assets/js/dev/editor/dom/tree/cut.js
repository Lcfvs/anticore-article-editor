import {contains} from 'anticore/dom/info/contains';
import {isElement} from 'anticore/dom/info/isElement';
import {isEmpty} from 'anticore/dom/info/isEmpty';
import {isText} from 'anticore/dom/info/isText';
import {fragment} from 'anticore/dom/node/fragment';
import {closestOrSelf} from 'anticore/dom/query/closestOrSelf';
import {firstNode} from 'anticore/dom/query/firstNode';
import {nextNode} from 'anticore/dom/query/nextNode';
import {nextNodes} from 'anticore/dom/query/nextNodes';
import {nodes} from 'anticore/dom/query/nodes';
import {parent as parentNode} from 'anticore/dom/query/parent';
import {append} from 'anticore/dom/tree/append';
import {appendAll} from 'anticore/dom/tree/appendAll';
import {clone} from 'anticore/dom/tree/clone';
import {text} from 'anticore/dom/tree/text';

export function cut(node, offset) {
  return recurse(closestOrSelf('[contenteditable=true]', node), node, offset);
}

function recurse(parent, target, offset) {
  let
  childNodes,
  container,
  current,
  next,
  siblings;

  if (!parent) {
    return fragment();
  }

  childNodes = nodes(parent);

  if (!childNodes.length) {
    return fragment();
  }

  container = clone(parent);

  if (parent === target) {
    parent = isElement(parent) ? parent : parentNode(target);
    current = childNodes[offset];
    siblings = nextNodes(current);
    append(current, container);
    appendAll(siblings, container);

    return container;
  }

  current = firstNode(parent);

  while (current && !contains(container, current)) {
    next = nextNode(current);

    if (!isEmpty(current)) {
      siblings = nextNodes(current);

      if (isText(current) && current === target) {
        append(extractText(current, offset), container);
        appendAll(siblings, container);
      } else if (isElement(current) && contains(current, target)) {
        append(recurse(current, target, offset), container);
        appendAll(siblings, container);
      }
    }

    current = next;
  }

  return container;
}

function extractText(node, offset) {
  let
  container = clone(node, true);

  text(container, text(container).substr(offset));
  text(node, text(node).substr(0, offset));

  return container;
}