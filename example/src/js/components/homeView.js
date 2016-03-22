var HomeView = Backbone.View.extend ({

    template: _.template('<h1>Home!</h1>'),

    render: function () {
        console.log(this.template());
        this.$el.html(this.template());
        return this.$el;
    }
})