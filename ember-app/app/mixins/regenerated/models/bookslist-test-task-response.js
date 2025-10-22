import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  author: DS.attr('string'),
  pages: DS.attr('number'),
  // Данное ниже поле, будет проассоциировано с ID из API
  bookId: DS.attr('string')
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.bookslist-test-task-response.validations.fIO.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', {
        presence: true,
        message: 'Название книги обязательно'
      })
    ],
  },
  author: {
    descriptionKey: 'models.bookslist-test-task-response.validations.author.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', {
        presence: true,
        message: 'Автор обязателен'
      })
    ],
  },
  pages: {
    descriptionKey: 'models.bookslist-test-task-response.pages.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', {
        allowString: true,
        integer: true,
        positive: true,
        message: 'Количество страниц должно быть положительным числом'
      })
    ],
  }
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('BookE', 'book', {
    name: attr('Название', { index: 0 }),
    author: attr('Автор', { index: 1 }),
    pages: attr('Страницы', { index: 2 }),
    bookId: attr('ID книги', { index: 3 })
  });

  modelClass.defineProjection('BookL', 'book', {
    name: attr('Название', { index: 0 }),
    author: attr('Автор', { index: 1 }),
    pages: attr('Страницы', { index: 2 })
  });
};