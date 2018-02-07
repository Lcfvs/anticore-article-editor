import './a.md';
import './h1.md';
import './p.md';
import {anticore} from 'anticore';
import {one} from 'anticore/dom/query/one';
import {parent} from 'anticore/dom/query/parent';
import {before} from 'anticore/dom/tree/before';

anticore.on('section[data-insert]', function(element, next) {
  let
  refNode = one(element.dataset.insert);

  element.normalize();
  before(element, refNode, parent(refNode));

  next();
});