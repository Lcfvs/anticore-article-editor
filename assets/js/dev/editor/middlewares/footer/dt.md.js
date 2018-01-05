import {
  listenDtKeys
} from '../../core';

import {
  on
} from '../../dom';

on('dt[contenteditable=true]', function (element, next) {
  listenDtKeys(element);

  next();
});