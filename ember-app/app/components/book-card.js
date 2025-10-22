// import Component from '@ember/component';

// export default Component.extend({
// });
import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),

  classNames: ['book-card'],
  
  click() {
    let book = this.get('book');
    console.log(book);
    
    if (book && book.get('id')) {
      this.get('router').transitionTo('book-detail', book.get('id'));
    }
  }
});