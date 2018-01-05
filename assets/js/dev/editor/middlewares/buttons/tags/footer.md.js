import anticore from 'anticore';

anticore.on('.tags button.footer', function () {
  return function (element, next) {

    next();
  };
}());