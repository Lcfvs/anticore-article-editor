import {
  listenPKeys
} from '../../core';

import {
  on
} from '../../dom';

on('p[contenteditable=true]', function (element, next) {
  listenPKeys(element);

  next();
});