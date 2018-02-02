import {on} from '../../dom/on';
import {listenH1} from '../../core/listenH1';

on('section h1[contenteditable=true]', function (element, next) {
  listenH1(element);
  next();
});