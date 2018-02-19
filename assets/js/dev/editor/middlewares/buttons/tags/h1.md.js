import {anticore} from 'anticore';

anticore.on('form.editor .options button.add.h1', function (element, next) {

  next();
});