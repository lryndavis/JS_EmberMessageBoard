import Ember from 'ember';

export default Ember.Component.extend({
  isContentShowing: false,
  actions: {
    contentShow: function() {
      this.set('isContentShowing', true);
    },
    contentHide: function() {
      this.set('isContentShowing', false);
    }
  }
});
