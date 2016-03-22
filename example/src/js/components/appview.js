var AppView = Backbone.View.extend({

    className: 'App',

    template: _.template($('#app-template').html()),

    initialize: function (options) {
        this.barView = options.barView;
        this.listenTo(app, 'show', this.show);
    },

    show: function (view) {
        var displayWindow;
        if (view) {
            this.$('.page-slot').empty();
            displayWindow = view.render();
            this.$('.page-slot').append(displayWindow);
        } 
    },

    render: function (view) {
        this.$el.html(this.template());
        this.$('.bar-slot').empty();
        this.barView.render();
        this.$('.bar-slot').append(this.barView.$el);
    }
})