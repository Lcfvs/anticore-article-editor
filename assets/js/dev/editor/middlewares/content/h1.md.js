import {anticore} from 'anticore';
import {end} from 'anticore/dom/selection/end';
import {listenH1} from '../../core/listenH1';

anticore.on('section h1[contenteditable=true]', function (element, next) {
  listenH1(element);
  setTimeout(end, 0, element);

  next();
});