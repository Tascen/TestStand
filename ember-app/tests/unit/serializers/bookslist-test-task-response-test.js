import { moduleForModel, test } from 'ember-qunit';

moduleForModel('bookslist-test-task-response', 'Unit | Serializer | bookslist-test-task-response', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:bookslist-test-task-response',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:bookslist-test-task-response',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
