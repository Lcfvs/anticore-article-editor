import './p.md';
import './summary.md';
import {anticore} from 'anticore';
import {one} from 'anticore/dom/query/one';
import {before} from 'anticore/dom/tree/before';

anticore.on('section.quiz', function(element, next) {
  let
  footer = one('form article footer');

  before(element, one('section.sources', footer), footer);
  one('form article button.quiz').disabled = 'disabled';

  next();
});