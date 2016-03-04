import Ember from 'ember';

export default Ember.Component.extend({
  addNewCategoryItem: false,
  actions: {
    categoryItemFormShow() {
      this.set('addNewCategoryItem', true);
      this.set('item', "");
      this.set('description', "");
      this.set('item_image', "");
      this.set('item_cost', "");
    },

    saveCategoryItem() {
      var params = {
        category: this.get('category'),
        item: this.get('item'),
        description: this.get('description'),
        item_image: this.get('item_image'),
        item_cost: this.get('item_cost')
      };
      this.set('addNewCategoryItem', false);
      this.sendAction('saveCategoryItem', params);
    }
  }
});
