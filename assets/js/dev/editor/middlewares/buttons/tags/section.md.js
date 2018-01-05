import anticore from 'anticore';

anticore.on('.tags button.section', function () {
  return function (element, next) {

    next();
  };
}());