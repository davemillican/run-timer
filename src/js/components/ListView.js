
var $ = require ('jquery');
var _ = require ('underscore');
var Backbone = require ('backbone');

var RaceModel = require ('./RaceModel.js');
var DetailView = require ('./DetailView.js');
 
ListView = Backbone.View.extend ({

    template: _.template (
        `<div>ListView
            <div class="detail-item"></div>
            <button>Create</button>
        </div>`
        ),

    events: {
        'click ': 'onClickDetail',
        'click button': 'onClickButton'
    },

    onClickDetail: function () {
        alert("Detail click");
    },

    onClickButton: function () {
        alert('button click')
    },

    initialize: function () {

    },

    children: [],

    render: function () {
        var localView;

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
            $('.detail-view').append(localView.$el);
        });
    }
});

module.exports = ListView;
