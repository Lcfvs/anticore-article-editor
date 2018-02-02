import {remove} from 'anticore-tools/dom/shapers/remove';
import {returns} from '../queries/returns';
import {styles} from '../queries/styles';
import {isEmpty} from 'anticore-tools/dom/infos/isEmpty';
import {isTrailingStyle} from '../infos/isTrailingStyle';
import {isTrailingReturn} from '../infos/isTrailingReturn';
import {forEach} from 'anticore-tools/utils/array/forEach';

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