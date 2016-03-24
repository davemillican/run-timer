
var $ = require ('jquery');
var _ = require ('underscore');
var Backbone = require ('backbone');

var RaceModel = require ('./RaceModel.js');
var DetailView = require ('./DetailView.js');
 
var ListView = Backbone.View.extend ({

    className: 'list-view',

    template: _.template (
        `<div class='title-bar'>Run Timer</div>
         <div class="detail-item"></div>
         <div class="button-holder"></div>`
        ),

    events: {
        'click button': 'onClickButton'
    },

    onClickButton: function () {
        window.location.hash = 'create'
    },

    initialize: function () {

    },

    children: [],

    render: function () {
        var localView;
        var _this = this;

        //ERROR!!!!! the following is never going to happen.
        //  The last listView was removed.  This new listView
        // is created from scratch in the Router
        while (this.children.length > 0 ) 
        {
            localView = this.children.pop();
            localView.remove();
        };

        this.$el.html(this.template());
        this.collection.forEach ( function (model) {
            localView = new DetailView ({model: model});
            //this.children.push(localView);
            localView.render();
            _this.$('.detail-item').append(localView.$el);
        });

        var button = $('<button>').html('Button');
        button.addClass('create-button');
        this.$('.button-holder').append(button);
    }
});

module.exports = ListView;
