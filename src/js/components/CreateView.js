var _ = require('underscore');
var Backbone = require ('backbone');

var CreateView = Backbone.View.extend({

    template: _.template(
        `<h1>Create New Run</h1>
         <input id="new-date">
         <input id="new-time">
         <input id="new-description">
         <button>Submit</submit>`
        ),
    
    render: function () {
        this.$el.html(this.template());

        console.log ("Rendering the CreateView");
    }

});

module.exports = CreateView;