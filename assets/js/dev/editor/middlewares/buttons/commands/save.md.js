import {all, clean, getClosest, listen, on, one, remove} from '../../../dom';
import {forEach} from '../../../utils';

function onClick(event) {
  let
  form = getClosest('form', event.target),
  article = one('article', form),
  clone;

  clean('article', article);
  clone = article.cloneNode(true);
  forEach(all('.options', clone), remove);
  forEach(all('.tags', clone), remove);

  form.elements.article.value = clone.innerHTML;
  event.preventDefault();
  console.log(clone.innerHTML);
}

on('form button:not([type])', function (element, next) {
  listen('click', element, onClick);

  next();
});