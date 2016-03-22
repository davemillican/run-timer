var $ = require ('jquery');
var _ = require ('underscore');
var Backbone = require ('backbone');

var quantity;

var RaceModel = Backbone.Model.extend({
    initialize: function () {
        this.id = quantity++;
    }
    
});

module.exports = RaceModel;