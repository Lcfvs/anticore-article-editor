import {on, one, append} from '../../dom';

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