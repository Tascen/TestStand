import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  store: Ember.inject.service(),
  templateName: 'bookslist-test-task-response',
  modelProjection: 'ResponseAll',

  model() {
    return new Promise((resolve) => {
      fetch('https://teststand.t-mobis.ru/Books')
        .then(response => response.json())
        .then(data => {
          const booksData = JSON.parse(data);
          
          this.store.unloadAll('bookslist-test-task-response');
          
          const books = booksData.map(bookData => {
            return this.store.createRecord('bookslist-test-task-response', {
              // Используется как primary key
              id: bookData.ID,
              name: bookData.Name,
              author: bookData.Author,
              pages: bookData.Pages,
              bookId: bookData.ID
            });
          });
          
          resolve(books);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
          resolve([]);
        });
    });
  }
})