import anticore from 'anticore';

anticore.on('button.add.img', function () {
  return function (element, next) {

    next();
  };
}());