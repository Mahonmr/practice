import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCategory(params) {
      this.sendAction('saveCategory', params);
    }
  }
});
