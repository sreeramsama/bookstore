import DS from 'ember-data';
//import attr from 'ember-data/attr';
//import { hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
  name: DS.attr('string'),
  discount: DS.attr('number'),
  published: DS.hasMany('book')
});
