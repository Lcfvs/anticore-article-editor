import {isElement} from 'anticore/dom/info/isElement';
import {matches} from 'anticore/dom/info/matches';
import {closest} from 'anticore/dom/query/closest';

const selector = 'h1, h2, h3, h4, h5, h6';

export function isHeadingNode(node) {
  return node
  && (isElement(node) && matches(selector, node))
  || closest(selector, node);
}