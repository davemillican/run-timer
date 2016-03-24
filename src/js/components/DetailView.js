var $ = require ('jquery');
var _ = require ('underscore');
var Backbone = require ('backbone');

var DetailView = Backbone.View.extend ({

    className: 'cf line-item',

    events: {
        'click span': 'onClick',
    },

    onClick: function () {
        window.location.hash = "expand/" + this.model.get('id');
    },

    template: _.template(`
        <span class="date"> <%= get("date") %> </span>
        <span class="time"> <%= get("time") %> </span>
    `),

    render: function () {
        this.$el.append(this.template(this.model));
    }
});

module.exports = DetailView;