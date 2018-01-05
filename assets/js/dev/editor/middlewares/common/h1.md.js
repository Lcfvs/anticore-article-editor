import {
  on
} from '../../dom';

import {
  listenH1Keys
} from '../../core';

on('h1[contenteditable=true]', function (element, next) {
  listenH1Keys(element);

  next();
});