import {on} from '../../dom';
import {listenP} from '../../core';

on('section p[contenteditable=true]', function (element, next) {
  listenP(element);
  next();
});