import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('bookslist-test-task-response.all',
  { path: 'bookslist-test-task-response/all' });
  this.route('timepath-test-task-response-e',
  { path: 'timepath-test-task-response-e/:id' });
  this.route('timepath-test-task-response-e.new',
  { path: 'timepath-test-task-response-e/new' });
});

export default Router;
