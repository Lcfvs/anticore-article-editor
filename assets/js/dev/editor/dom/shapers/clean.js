import {remove} from '.';
import {returns} from '../queries';
import {forEach} from '../../utils';
import {isEmpty} from '../infos';
import {isTrailingBr} from '../infos';

export function clean(node) {
  forEach(returns(node), removeTrailingReturn);

  return isEmpty(node);
}

function removeTrailingReturn(node) {
  if (isTrailingBr(node)) {
    remove(node);
  }

  node.normalize();
}