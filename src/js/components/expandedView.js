var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');

var ExpandedView = Backbone.View.extend({

    className: 'expanded-view',
    events: {
        'click button': 'onClick'
    },

    onClick: function () {
        window.location.hash = '';
    },

    template: _.template(
        `<div class='title-bar'>Run Timer</div>
         <div class="line-item">
            <span>Date: </span>
            <span><%= get('date') %></span>
         </div>
         <div class="line-item">
            <span>Time: </span>
            <span><%= get('time') %></span>
         </div>
         <div class="line-item">
            <span>Notes: </span>
            <span><%= get('notes') %></span>
         </div>
         <button>Exit</button>`
    ),

    render: function () {
        this.$el.html(this.template( this.model ));       
    }
});

module.exports = ExpandedView;