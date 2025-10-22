import { moduleForModel, test } from 'ember-qunit';

moduleForModel('timepath-test-task-response', 'Unit | Serializer | timepath-test-task-response', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:timepath-test-task-response',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:timepath-test-task-response',
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
