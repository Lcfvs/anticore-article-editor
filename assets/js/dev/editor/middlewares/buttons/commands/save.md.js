import {forEach} from '../../../utils';
import {listenClick} from '../../../dom/listeners';
import {all, closest, one} from '../../../dom/queries';
import {clean, remove} from '../../../dom/shapers';
import {on} from '../../../dom';

function onClick(event) {
  let
  form = closest('form', event.target),
  article = one('article', form),
  clone;

  clean(article);
  clone = article.cloneNode(true);
  forEach(all('.options', clone), remove);
  forEach(all('.tags', clone), remove);

  form.elements.article.value = clone.innerHTML;
  event.preventDefault();
  console.log(clone.innerHTML);
}

on('form button:not([type])', function (element, next) {
  listenClick(element, onClick);

  next();
});