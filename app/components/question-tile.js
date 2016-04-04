import Ember from 'ember';

export default Ember.Component.extend({
  //sort using timestamp to show most recent answers
  sortDefinition: ['date:desc'],
  sortedQuestions: Ember.computed.sort('questions', 'sortDefinition'),
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
