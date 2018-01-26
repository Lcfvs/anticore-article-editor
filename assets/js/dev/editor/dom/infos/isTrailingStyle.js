import {nodeName} from '.';
import {isEmpty} from './isEmpty';
import {indexOf} from '../../utils';

export function isTrailingStyle(node) {
  return indexOf(['b', 'i', 's', 'u'], nodeName(node)) > - 1
  && isEmpty(node);
}