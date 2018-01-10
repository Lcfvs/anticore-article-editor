import {insert} from '.';

export function append(node, parent) {
  return insert(node, null, parent);
}