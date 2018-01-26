import {insert} from '.';

export function wrap(wrapper, node) {
  insert(node, null, wrapper);

  return wrapper;
}