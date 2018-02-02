import {nodeName} from 'anticore-tools/dom/infos/nodeName';

export function hasSameNodeName(original, target) {
  return nodeName(original) === nodeName(target);
}