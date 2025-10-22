import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  fIO: DS.attr('string'),
  email: DS.attr('string')
});

export let ValidationRules = {
  fIO: {
    descriptionKey: 'models.bookslist-test-task-response.validations.fIO.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ResponseE', 'bookslist-test-task-response', {
    fIO: attr('', { index: 0 }),
    email: attr('', { index: 0 })
  });

  modelClass.defineProjection('ResponseL', 'bookslist-test-task-response', {
    fIO: attr('FIO', { index: 0 })
  });
};
