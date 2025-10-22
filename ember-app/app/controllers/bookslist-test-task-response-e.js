// import EditFormController from 'ember-flexberry/controllers/edit-form';

// export default EditFormController.extend({
//   parentRoute: 'bookslist-test-task-response',
// });
import Controller from '@ember/controller';

export default class BookDetailController extends Controller {
  get isBookLoaded() {
    return !!this.model;
  }

  goBack() {
    this.router.transitionTo('bookslist-test-task-response/new');
  }
}