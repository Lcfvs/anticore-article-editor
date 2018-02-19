import {anticore} from 'anticore';

anticore.on('form.editor .options button.section', function (element, next) {

  next();
});