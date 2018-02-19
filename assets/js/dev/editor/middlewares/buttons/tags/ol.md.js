import {anticore} from 'anticore';

anticore.on('form.editor .options button.add.ol', function (element, next) {

  next();
});