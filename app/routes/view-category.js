import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    console.log("testing")
    console.log(this.store.findRecord('category', params.category_id))
    return this.store.findRecord('category', params.category_id);
  }
});
