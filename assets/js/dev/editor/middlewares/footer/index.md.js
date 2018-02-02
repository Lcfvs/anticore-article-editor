import {on} from '../../dom/on';
import {one} from 'anticore-tools/dom/queries/one';
import {append} from 'anticore-tools/dom/shapers/append';

on('footer[data-append]', function(element, next) {
  let
  target = one(element.dataset.append);

  if (one('footer', target)) {
    return;
  }

  append(element, target);
  one('button.footer', target).disabled = 'disabled';

  next();
});