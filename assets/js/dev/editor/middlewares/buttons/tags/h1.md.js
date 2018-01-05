import anticore from 'anticore';

anticore.on('button.add.h1', function () {
  return function (element, next) {

    next();
  };
}());