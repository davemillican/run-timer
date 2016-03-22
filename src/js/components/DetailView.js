var $ = require ('jquery');
var _ = require ('underscore');
var Backbone = require ('backbone');

DetailView = Backbone.View.extend ({

    template: _.template(
       `<div>
            <span> <%= get("date") %> </span>
            <span> <%= get("time") %> </span>
        </div>`

                            ),
    render: function () {
        this.$el.append(this.template(this.model));
    }
});

module.exports = DetailView;