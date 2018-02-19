import {anticore} from 'anticore';

anticore.on('form.editor .options button.footer', function (element, next) {

  next();
});