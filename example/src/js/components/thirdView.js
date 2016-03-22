var ThirdView = Backbone.View.extend ({

    template: _.template('<h1>Third!</h1>'),

    initialize: function (options) {
        this.parent = options.parent;
    },

    render: function () {
        var element;
        this.$el.html(this.template());

        element = this.parent.render();
        this.parent.$el.append(this.$el);
        return element;
    }
})