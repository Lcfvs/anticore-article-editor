import {on} from '../../dom';
import {listenP} from '../../core';

on('header p[contenteditable=true]', function (element, next) {
  listenP(element);
  next();
});