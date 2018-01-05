import {
  listenDdKeys
} from '../../core';

import {
  on
} from '../../dom';

on('dd[contenteditable=true]', function (element, next) {
  listenDdKeys(element);

  next();
});