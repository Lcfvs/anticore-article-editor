import './a.md';
import './h1.md';
import './p.md';
import {on} from '../../dom/on';
import {one} from 'anticore-tools/dom/queries/one';
import {insert} from 'anticore-tools/dom/shapers/insert';

on('section[data-insert]', function(element, next) {
  let
  refNode = one(element.dataset.insert);

  element.normalize();
  insert(element, refNode, refNode.parentNode);

  next();
});