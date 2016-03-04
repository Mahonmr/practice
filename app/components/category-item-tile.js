import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCategoryItem(params) {
      this.sendAction('saveCategoryItem', params);
    }
  }
});
