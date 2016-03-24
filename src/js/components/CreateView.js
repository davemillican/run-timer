var _ = require('underscore');
var Backbone = require ('backbone');

var CreateView = Backbone.View.extend({

    className: 'create-view',

    events: {
        'click button': 'onClick'
    },

    onClick: function () {
        this.collection.push({
            time: $('#new-time').val(),
            date: $('#new-date').val(),
            notes: $('#new-description').val(),
            id: this.collection.nextID++
        });
        console.log($('new-time').val());
        // Go to the listView
        window.location.hash = '';
    },

    template: _.template(
        `<h1 class="title-bar"> Run Timer</h1>
         <h2> New Run</h2>
         <input id="new-time" placeholder="Run Time">
         <input id="new-date" placeholder="Race Date">
         <input id="new-description" placeholder="Race Notes">
         <button class="submit-ok">Submit</button>`
        ),
    
    render: function () {
        this.$el.html(this.template());

        console.log ("Rendering the CreateView");
    }

});

module.exports = CreateView;