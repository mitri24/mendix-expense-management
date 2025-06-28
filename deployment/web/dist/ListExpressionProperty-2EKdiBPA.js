import { asProperty, toFriendlyId, fromConstant$, available, asDynamicValue$, getFormExpressionResult$, getVariableFromStore$ } from './index-UACZNrBd.js';
import { listItemProperty } from './CTcC6PjV-B-x7hXp6.js';
import './uEIG9e6s-DbIaJy7J.js';

const ListExpressionProperty = asProperty((config, store, widgetId, propertyPath) => listItemProperty((object) => function(config2, store2, widgetId2, object2) {
  const description = `Value of ${toFriendlyId(widgetId2)}`, object$ = fromConstant$(available(object2));
  return asDynamicValue$(getFormExpressionResult$(description, store2, config2.expression, (variable) => variable.widget === widgetId2 && "object" === variable.source ? object$ : getVariableFromStore$(description, store2, variable)));
}(config, store, widgetId, object), `List expression "${widgetId}/${propertyPath}"`, config.dataSourceId));

export { ListExpressionProperty };
