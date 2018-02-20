import './a.md';
import './figure.md';
import './h1.md';
import './p.md';
import {anticore} from 'anticore';
import {one} from 'anticore/dom/query/one';
import {before} from 'anticore/dom/tree/before';

anticore.on('section.content', function(element, next) {
  element.normalize();
  before(element, one('article > footer'));

  next();
});