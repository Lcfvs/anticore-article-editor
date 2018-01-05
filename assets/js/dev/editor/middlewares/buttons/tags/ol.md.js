import anticore from 'anticore';

anticore.on('button.add.ol', function () {
  return function (element, next) {

    next();
  };
}());