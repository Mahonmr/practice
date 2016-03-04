import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },

  actions: {
    saveCategoryItem(params) {
      var newItem = this.store.createRecord('categoryitem', params);
      var category = params.category;
      category.get('categoryitems').addObject(newItem);
      newItem.save().then(function() {
        return category.save();
      });
      this.transitionTo('category', params.category);
    },
  }
});
