import DS from 'ember-data';

export default DS.Model.extend({
  categoryitems: DS.hasMany('categoryitem', { async: true }),
  description: DS.attr(),
  category_image: DS.attr(),
});
