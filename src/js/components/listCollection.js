var Backbone = require('backbone');

var data = [
    {id: 1, date:"1/1/14", time:"2:45", notes:"this is a test"},
    {id: 2, date:"9/3/15", time:"2:45", notes:"This too"},
    {id: 3, date:"7/2/16", time:"10:15", notes:"third test"}
];

appCollection = new Backbone.Collection(data);

appCollection.nextID = data.length + 1;

module.exports = appCollection;
