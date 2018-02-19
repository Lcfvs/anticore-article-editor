import {isText} from 'anticore/dom/info/isText';
import {matches} from 'anticore/dom/info/matches';
import {closest} from 'anticore/dom/query/closest';
import {nodeName} from 'anticore/dom/info/nodeName';
import {parent} from 'anticore/dom/query/parent';
import {firstElement} from 'anticore/dom/query/firstElement';

export function isFirstLi(node) {
  if (!node) {
    return false;
  }

  if (isText(node)) {
    node = closest('li', node);
  }

  return nodeName(node) === 'li'
  && firstElement(parent(node)) === node;
}