import {wrap} from '.';
import {forEach} from '../../utils';

export function wrapAll(wrapper, nodes) {
  forEach(nodes, wrap.bind(null, wrapper));

  return parent;
}