import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
    'bookslist-test-task-response': BookslistTestTaskResponseModel,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'product-36997': {
          caption: 'product-36997',
          title: 'product-36997',
          'timepath-test-task-response-l': {
            caption: 'timepath-test-task-response-l',
            title: 'timepath-test-task-response-l'
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'bookslist-test-task-response-l': BookslistTestTaskResponseLForm,
    'bookslist-test-task-response-e': BookslistTestTaskResponseEForm,
    'timepath-test-task-response-l': TimepathTestTaskResponseLForm,
    'timepath-test-task-response-e': TimepathTestTaskResponseEForm,
  },

});

export default translations;
