import {on} from '../../dom';
import {listenH1} from '../../core';

on('section h1[contenteditable=true]', function (element, next) {
  listenH1(element);
  next();
});