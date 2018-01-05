import anticore from 'anticore';

anticore.on('button.add.li', function () {
  return function (element, next) {

    next();
  };
}());