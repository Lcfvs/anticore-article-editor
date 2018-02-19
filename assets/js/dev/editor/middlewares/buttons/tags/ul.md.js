import {anticore} from 'anticore';

anticore.on('form.editor .options button.add.ul', function (element, next) {

  next();
});