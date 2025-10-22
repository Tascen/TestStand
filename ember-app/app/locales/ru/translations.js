import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import TimepathTestTaskResponseLForm from './forms/timepath-test-task-response-l';
import TimepathTestTaskResponseEForm from './forms/timepath-test-task-response-e';
import TimepathTestTaskResponseModel from './models/timepath-test-task-response';
import BookslistTestTaskResponseLForm from './forms/bookslist-test-task-response-l';
import BookslistTestTaskResponseEForm from './forms/bookslist-test-task-response-e';
import BookslistTestTaskResponseModel from './models/bookslist-test-task-response';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'timepath-test-task-response': TimepathTestTaskResponseModel,
    'bookslist-test-task-response': BookslistTestTaskResponseModel,
  },

  'application-name': 'Тестовое задание',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Тестовое задание',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Тестовое задание',
          title: 'Тестовое задание'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'product-36997': {
          caption: 'Тестовое задание',
          title: 'Тестовое задание',
          'timepath-test-task-response-l': {
            caption: 'Response',
            title: ''
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'bookslist-test-task-response-l': BookslistTestTaskResponseLForm,
    'bookslist-test-task-response-e': BookslistTestTaskResponseEForm,
    'timepath-test-task-response-l': TimepathTestTaskResponseLForm,
    'timepath-test-task-response-e': TimepathTestTaskResponseEForm,
  },

});

export default translations;
