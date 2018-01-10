import {isElement, matches} from '.';
import {closest} from '../queries';

const selector = 'h1, h2, h3, h4, h5, h6';

export function isHeadingNode(node) {
  return (isElement(node) && matches(selector, node))
  || closest(selector, node);
}