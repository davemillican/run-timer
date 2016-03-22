var AboutView = Backbone.View.extend ({

    template: _.template('<h1>About!</h1>'),

    render: function () {
        this.$el.html(this.template());
        return this.el;
    }
})