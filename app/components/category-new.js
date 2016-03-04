import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategory: false,
  actions: {
    categoryFormShow() {
      this.set('addNewCategory', true);
      this.set('description', "");
      this.set('category_image', "");
    },

    saveCategory() {
      var params = {
        description: this.get('description') || null,
        category_image: this.get('category_image') || null,
      };
      this.set('addNewCategory', false);
      this.sendAction('saveCategory', params);
    }
  }
});
