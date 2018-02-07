import {remove} from 'anticore/dom/tree/remove';
import {returns} from '../query/returns';
import {styles} from '../query/styles';
import {isEmpty} from 'anticore/dom/info/isEmpty';
import {isTrailingStyle} from '../info/isTrailingStyle';
import {isTrailingReturn} from '../info/isTrailingReturn';
import {forEach} from 'anticore/primitive/array/forEach';

export function clean(node) {
  forEach(styles(node), removeTrailingStyle);
  forEach(returns(node), removeTrailingReturn);

  return isEmpty(node);
}

function removeTrailingStyle(node) {
  if (isTrailingStyle(node)) {
    remove(node);
  }

  node.normalize();
}

function removeTrailingReturn(node) {
  if (isTrailingReturn(node)) {
    remove(node);
  }

  node.normalize();
}