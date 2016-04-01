import Ember from 'ember';

export default Ember.Component.extend({
  sortDefinition: ['date:desc'],
  sortedAnswers: Ember.computed.sort('answers', 'sortDefinition'),
  actions: {
    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },

    deleteAnswer(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
