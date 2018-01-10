import {on} from '../../dom';
import {one} from '../../dom/queries';
import {append} from '../../dom/shapers';

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