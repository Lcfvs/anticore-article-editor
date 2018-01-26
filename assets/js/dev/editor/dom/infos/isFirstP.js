import {isText, matches} from './index';
import {closest} from '../queries';
import {nodeName} from './nodeName';

export function isFirstP(node) {
  if (isText(node)) {
    node = closest('p', node);
  }

  return nodeName(node) === 'p'
  && matches('form article header p:first-of-type', node)
  && node.parentNode.firstElementChild === node;
}