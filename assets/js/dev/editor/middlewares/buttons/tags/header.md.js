import {anticore} from 'anticore';

anticore.on('form.editor .options button.add.header', function (element, next) {

  next();
});