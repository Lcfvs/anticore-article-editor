import {all, forEachDescendant, getClosestOrMatches, isEmpty, nodeName, selectPrevious, remove} from '.';
import {EDITABLE as EDITABLE_SELECTOR, REMOVABLE as REMOVABLES_SELECTOR} from '../selectors';

export function clean(selector, node, exclude) {
  let
  origin = getClosestOrMatches(selector, node),
  tree = all(EDITABLE_SELECTOR, origin),
  nodes = all(REMOVABLES_SELECTOR, origin);

  forEachDescendant(nodes, removeTrailing, exclude);

  if (isEmpty(node)) {

    return true;
  }

  selectPrevious(node, tree);

  return false;
}

function removeTrailing(node) {
  if (node !== this && isTrailing(node)) {
    if (isH1(node)) {
      node = node.parentNode;
    }

    remove(node);
  }

  node.normalize();
}

function isTrailing(node) {
  return isTrailingSection(node)
  || isTrailingP(node)
  || isTrailingBr(node)
  || isTrailingFooter(node);
}

function isBr(node) {
  return nodeName(node) === 'br';
}

function isH1(node) {
  return nodeName(node) === 'h1';
}

function isFooter(node) {
  return nodeName(node) === 'footer';
}

function isSection(node) {
  return nodeName(node) === 'section';
}

function isP(node) {
  return nodeName(node) === 'p';
}

function isEmptySection(node) {
  return isSection(node)
  && node.children.length === 2
  && isEmpty(node.children[0])
  && isEmpty(node.children[1]);
}

function isTrailingSection(node) {
  return isH1(node)
  && isEmptySection(node.parentNode);
}

function isUniqueP(node) {
  return isP(node)
  && all('p', node.parentNode).length === 1;
}

function isTrailingBr(node) {
  return isBr(node)
  && (!node.previousSibling
  || !node.nextSibling
  || isBr(node.previousSibling)
  || isBr(node.nextSibling));
}

function isTrailingP(node) {
  return isP(node)
  && !isUniqueP(node)
  && isEmpty(node);
}

function isEmptyFooter(node) {
  return isFooter(node)
  && isEmpty(node);
}

function isTrailingFooter(node) {
  return isEmptyFooter(node);
}