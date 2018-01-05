import {forEach, reverse} from '../utils';

export function forEachDescendant(nodes, callback, thisArg) {
  forEach(reverse(nodes), function (node, ...params) {
    if (node.childNodes) {
      forEachDescendant(node.childNodes, callback, thisArg);
    }

    callback.call(thisArg, node, ...params);
  });
}