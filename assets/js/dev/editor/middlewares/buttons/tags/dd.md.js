import anticore from 'anticore';

anticore.on('button.add.dd', function () {
  return function (element, next) {

    next();
  };
}());