var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var ExpandedView = Backbone.View.extend({

    template: _.template(
        `<div class='title'></div>
         <div>
            <span>Date</span>
            <%= get('date') %>
         </div>
         <div>
            <span>Time></span>
            <%= get('time') %>
         </div>
         <div>
            <span>Notes</span>
         </div>`
    ),

    render: function () {
        this.$el.html(template( this.model ));       
    }
});

module.exports = ExpandedView;