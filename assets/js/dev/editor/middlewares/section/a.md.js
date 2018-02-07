import {anticore} from 'anticore';
import {listenA} from '../../core/listenA';

anticore.on('a[data-url]', function (element, next) {
  listenA(element);
  next();
});