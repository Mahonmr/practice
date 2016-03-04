import DS from 'ember-data';

export default DS.Model.extend({
  category: DS.belongsTo('category', { async: true }),
  item: DS.attr(),
  description: DS.attr(),
  item_image: DS.attr(),
  item_cost: DS.attr()
});
