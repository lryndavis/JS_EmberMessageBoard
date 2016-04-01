import DS from 'ember-data';

export default DS.Model.extend({
  user: DS.attr(),
  comment: DS.attr(),
  answer: DS.belongsTo('quesion', { async: true })
});
