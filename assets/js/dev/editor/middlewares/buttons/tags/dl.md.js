import anticore from 'anticore';

anticore.on('button.add.dl', function () {
  return function (element, next) {

    next();
  };
}());