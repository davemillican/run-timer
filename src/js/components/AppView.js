var $ = require ('jquery');
var _ = require ('underscore');
var Backbone = require ('backbone');

var dispatcher = require ('./dispatcher.js');
var AppView = Backbone.View.extend ({

    initialize: function () {
        this.listenTo(dispatcher, 'show', this.show);
    },

    show: function (view) {
        if (this.child) {
            this.child.remove();
        };

        view.render();

        this.$el.append(view.$el);

        this.child = view;
    },

    render: function () {
        // What do I render here?????????
    }

});

module.exports = AppView;