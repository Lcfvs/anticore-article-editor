import {forEach} from 'anticore-tools/utils/array/forEach';
import {on} from '../../../dom/on';
import {listenClick} from 'anticore-tools/dom/listeners/listenClick';
import {all} from 'anticore-tools/dom/queries/all';
import {closest} from 'anticore-tools/dom/queries/closest';
import {one} from 'anticore-tools/dom/queries/one';
import {clean} from '../../../dom/shapers/clean';
import {remove} from 'anticore-tools/dom/shapers/remove';

function onClick(event) {
  let
  form = closest('form', event.target),
  article = one('article', form),
  clone;

  clean(article);
  clone = article.cloneNode(true);
  forEach(all('.options', clone), remove);
  forEach(all('.tags', clone), remove);

  form.elements.article.value = clone.outerHTML;
  event.preventDefault();
  console.log(form.elements.article.value.replace(/<br>/g, '<br />'));
}

on('form button:not([type])', function (element, next) {
  listenClick(element, onClick);

  next();
});