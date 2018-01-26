import './a.md';
import './h1.md';
import './p.md';
import {on, one, insert} from '../../dom';

on('section[data-insert]', function(element, next) {
  let
  refNode = one(element.dataset.insert);

  element.normalize();
  insert(element, refNode, refNode.parentNode);

  next();
});