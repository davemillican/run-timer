var _ = require ('underscore');
var Backbone = require ('backbone');

window.dis = _.extend({}, Backbone.Events );

var dispatcher = require ('./dispatcher.js');
var ListView = require ('./ListView.js');
var ExpandedView = require ('./expandedView.js');
var CreateView = require ('./CreateView.js');
var listCollection = require ('./ListCollection.js')

var AppRouter = Backbone.Router.extend ({
    routes: {
        '': 'list',
        'expand': 'alertError',
        'expand/:param': 'expanded',
        'create': 'createNew'
    },

    alertError: function () {
        alert('Error: ExpandedView called with no Model');
    },

    list: function () {
        // alert('trigger listView');
        dispatcher.trigger('show', 
            new ListView({collection: listCollection}));
    },

    expanded: function (item) {
        var match;

        match = listCollection.find(function (model) {
            return (parseInt(model.get('id')) === parseInt(item));
        });

        dispatcher.trigger('show', new ExpandedView({model: match}));
    },

    createNew: function () {
        dispatcher.trigger('show',
                 new CreateView({collection: listCollection}));
    }
  

});

module.exports = AppRouter;