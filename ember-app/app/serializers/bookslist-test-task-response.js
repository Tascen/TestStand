import { Serializer as ResponseSerializer } from
  '../mixins/regenerated/serializers/bookslist-test-task-response';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ResponseSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
