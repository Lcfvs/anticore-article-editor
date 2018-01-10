import {nodeName} from './nodeName';

export function hasSameNodeName(original, target) {
  return nodeName(original) === nodeName(target);
}