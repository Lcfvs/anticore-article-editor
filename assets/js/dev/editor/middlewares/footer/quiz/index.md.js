import './p.md';
import './summary.md';
import {anticore} from 'anticore';
import {one} from 'anticore/dom/query/one';
import {append} from 'anticore/dom/tree/append';
import {before} from 'anticore/dom/tree/before';

anticore.on('section.quiz', function(element, next) {
  let
  footer = one('form article footer'),
  quiz = one('section.quiz', footer);

  if (quiz) {
    append(one('details', element), quiz);
  } else {
    before(element, one('section.sources, section.tags', footer));
  }

  next();
});