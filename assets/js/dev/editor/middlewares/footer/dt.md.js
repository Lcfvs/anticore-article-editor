import {listenDt} from '../../core';

import {on} from '../../dom';

on('dt[contenteditable=true]', function (element, next) {
  listenDt(element);

  next();
});