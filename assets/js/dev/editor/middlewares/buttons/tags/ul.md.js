import anticore from 'anticore';

anticore.on('button.add.ul', function () {
  return function (element, next) {

    next();
  };
}());