import {anticore} from 'anticore';
import {one} from 'anticore/dom/query/one';
import {append} from 'anticore/dom/tree/append';

anticore.on('footer[data-append]', function(element, next) {
  let
  target = one(element.dataset.append);

  if (one('footer', target)) {
    return;
  }

  append(element, target);
  one('button.footer', target).disabled = 'disabled';

  next();
});