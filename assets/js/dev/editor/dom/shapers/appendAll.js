import {forEach} from '../../utils';
import {append} from './append';

export function appendAll(nodes, parent) {
  forEach(nodes, function (node) {
    append(node, parent);
  });
}