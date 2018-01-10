import {isElement, isText} from '.';
import {one} from '../queries';
import {text} from './text';

export function isEmpty(node) {
  return (isText(node) || isElement(node) && !one('img', node))
  && !text(node).trim().length;
}