import anticore from 'anticore';
import './editor';
import {listen} from './editor/dom';

anticore.on('button[data-href]', function(element, next) {
  listen('click', element, anticore.fetchFromEvent);

  next();
});

anticore.fetchers.button = function (element) {
  return anticore.request(element.dataset.href, 'get', null, element);
};

anticore.defaults().populate();