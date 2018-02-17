import {anticore} from 'anticore';
import './editor';
import './test.md';
import {onClick} from 'anticore/dom/emitter/on/onClick';
import {onSubmit} from 'anticore/dom/emitter/on/onSubmit';

anticore.on([
  'body > header a:not([download]):not([target]):not([href^="data:"])',
  'body > header a[target=_self]:not([download]):not([href^="data:"])',
  'main > :not(form) a:not([download]):not([target]):not([href^="data:"])',
  'main > :not(form) a[target=_self]:not([download]):not([href^="data:"])',
  'body > footer a:not([download]):not([target]):not([href^="data:"])',
  'body > footer a[target=_self]:not([download]):not([href^="data:"])'
].join(','),
function(element, next) {
  onClick(element, anticore.fetchFromEvent);

  next();
});

anticore.on('form:not([target]),form[target=_self]', function(element, next) {
  onSubmit(element, anticore.cleanAndFetch);
  next();
});

anticore.on('button[data-href]:not(.anchor):not(.figure)', function(element, next) {
  onClick(element, anticore.fetchFromEvent);

  next();
});

anticore.fetchers.a = function (element) {
  return anticore.request(element.dataset.href || element.href, 'get', null, element);
};

anticore.fetchers.button = function (element) {
  return anticore.request(element.dataset.href, 'get', null, element);
};

anticore.populate();