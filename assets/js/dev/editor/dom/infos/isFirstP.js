import {isText} from 'anticore-tools/dom/infos/isText';
import {matches} from 'anticore-tools/dom/infos/matches';
import {closest} from 'anticore-tools/dom/queries/closest';
import {nodeName} from 'anticore-tools/dom/infos/nodeName';

export function isFirstP(node) {
  if (isText(node)) {
    node = closest('p', node);
  }

  return nodeName(node) === 'p'
  && matches('form article header p:first-of-type', node)
  && node.parentNode.firstElementChild === node;
}