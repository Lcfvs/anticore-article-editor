import anticore from 'anticore';

anticore.on('button.add.a', function () {
  return function (element, next) {

    next();
  };
}());