import {on} from '../../dom/on';
import {listenP} from '../../core/listenP';

on('section p[contenteditable=true]', function (element, next) {
  listenP(element);
  next();
});