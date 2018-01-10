import {listenDd} from '../../core';
import {on} from '../../dom';

on('dd[contenteditable=true]', function (element, next) {
  listenDd(element);

  next();
});