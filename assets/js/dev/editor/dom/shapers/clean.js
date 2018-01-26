import {remove} from '.';
import {returns, styles} from '../queries';
import {forEach} from '../../utils';
import {isEmpty, isTrailingStyle} from '../infos';
import {isTrailingReturn} from '../infos';

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