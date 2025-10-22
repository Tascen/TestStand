import { moduleForModel, test } from 'ember-qunit';

moduleForModel('timepath-test-task-response', 'Unit | Model | timepath-test-task-response', {
  // Specify the other units that are required for this test.
  needs: [
    'model:timepath-test-task-response',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
