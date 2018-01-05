import anticore from 'anticore';

anticore.on('button.add.header', function () {
  return function (element, next) {

    next();
  };
}());