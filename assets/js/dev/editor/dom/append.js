import {insert} from './insert';

export function append(node, parent) {
  return insert(node, null, parent);
}