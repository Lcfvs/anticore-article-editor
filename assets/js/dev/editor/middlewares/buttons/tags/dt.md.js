import anticore from 'anticore';

anticore.on('button.add.dt', function () {
  return function (element, next) {

    next();
  };
}());