import './li.md';
import {anticore} from 'anticore';
import {one} from 'anticore/dom/query/one';
import {append} from 'anticore/dom/tree/append';
import {before} from 'anticore/dom/tree/before';

anticore.on('section.sources', function(element, next) {
  let
  footer = one('form article footer'),
  sources = one('section.sources', footer);

  if (sources) {
    append(one('li', element), one('ol', sources));
  } else {
    before(element, one('section.tags', footer));
  }

  next();
});