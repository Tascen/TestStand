import Route from '@ember/routing/route';
import Ember from 'ember';

export default Route.extend({
  store: Ember.inject.service(),
  templateName: 'bookslist-test-task-response-e',
  modelProjection: 'ResponseE',

  model() {
    return new Promise((resolve, reject) => {
      fetch('https://teststand.t-mobis.ru/Books')
        .then(response => response.json())
        .then(data => {
          const booksData = JSON.parse(data);
          
          this.store.unloadAll('bookslist-test-task-response');
          
          const books = booksData.map(bookData => {
            return this.store.createRecord('bookslist-test-task-response', {
              id: bookData.ID, // Используем как primary key
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