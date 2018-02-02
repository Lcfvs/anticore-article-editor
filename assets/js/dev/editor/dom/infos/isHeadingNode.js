import {isElement} from 'anticore-tools/dom/infos/isElement';
import {matches} from 'anticore-tools/dom/infos/matches';
import {closest} from 'anticore-tools/dom/queries/closest';

const selector = 'h1, h2, h3, h4, h5, h6';

export function isHeadingNode(node) {
  return (isElement(node) && matches(selector, node))
  || closest(selector, node);
}