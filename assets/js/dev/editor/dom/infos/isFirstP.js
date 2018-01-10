import {nodeName} from './nodeName';
import {matches} from './matches';

export function isFirstP(node) {
  return nodeName(node) === 'p'
  && matches('form article header p:first-of-type', node);
}
