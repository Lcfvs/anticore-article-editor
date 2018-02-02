import {on} from '../../dom/on';
import {listenA} from '../../core/listenA';

on('a[data-url]', function (element, next) {
  listenA(element);
  next();
});