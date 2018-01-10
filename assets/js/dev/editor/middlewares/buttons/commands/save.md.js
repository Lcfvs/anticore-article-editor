import {forEach} from '../../../utils';
import {listenClick} from '../../../dom/listeners';
import {closest, one} from '../../../dom/queries';

function onClick(event) {
  let
  form = closest('form', event.target),
  article = one('article', form),
  clone;

  return alert('@todo : ' + __filename);
/*
  clean('article', article);
  clone = article.cloneNode(true);
  forEach(all('.options', clone), remove);
  forEach(all('.tags', clone), remove);

  form.elements.article.value = clone.innerHTML;
  event.preventDefault();
  console.log(clone.innerHTML);
}

on('form button:not([type])', function (element, next) {
  listenClick(element, onClick);

  next();*/
}