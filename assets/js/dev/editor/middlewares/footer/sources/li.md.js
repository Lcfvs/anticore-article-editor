import {anticore} from 'anticore';
import {all} from 'anticore/dom/query/all/index';
import {one} from 'anticore/dom/query/one/index';
import {text} from 'anticore/dom/tree/text';
import {attr} from 'anticore/dom/tree/attr';
import {appendAll} from 'anticore/dom/tree/appendAll';
import {listenLi} from '../../../core/listenLi';
import {forEach} from 'anticore/primitive/array/forEach';

anticore.on('section.sources li[contenteditable=true]', function (element, next) {
  let
  anchors = all('article a[href^="#"]'),
  items = all('article footer .sources li'),
  ordered = [],
  index = 0;

  forEach(anchors, function (anchor, key) {
    let
    item = element,
    id = 'source'.concat(key + 1);

    if (attr(anchor, 'href') !== '#') {
      item = items[index];
      index += 1;
    }

    text(one('sup', anchor), key + 1);
    anchor.href = '#'.concat(id);
    item.id = id;
    ordered.push(item);
  });

  listenLi(element);

  setTimeout(function () {
    appendAll(ordered, one('article footer .sources ol'));
  }, 0);

  next();
});