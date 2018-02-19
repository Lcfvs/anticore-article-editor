import {anticore} from 'anticore';

anticore.on('form.editor .options button.add.li', function (element, next) {

  next();
});