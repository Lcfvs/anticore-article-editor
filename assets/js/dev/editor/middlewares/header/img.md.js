import {anticore} from 'anticore';

anticore.on('article header img', function (element, next) {

  next();
});