import {isText} from 'anticore/dom/info/isText';
import {matches} from 'anticore/dom/info/matches';
import {closest} from 'anticore/dom/query/closest';
import {nodeName} from 'anticore/dom/info/nodeName';
import {parent} from 'anticore/dom/query/parent';
import {firstElement} from 'anticore/dom/query/firstElement';

export function isFirstP(node) {
  if (!node) {
    return false;
  }

  if (isText(node)) {
    node = closest('p', node);
  }

  return nodeName(node) === 'p'
  && firstElement(parent(node)) === node;
}