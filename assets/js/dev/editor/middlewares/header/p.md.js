import {on} from '../../dom/on';
import {listenP} from '../../core/listenP';

on('header p[contenteditable=true]', function (element, next) {
  listenP(element);
  next();
});