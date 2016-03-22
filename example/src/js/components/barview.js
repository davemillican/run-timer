var BarView = Backbone.View.extend({

    className: 'bar',

    events: {
        'click button': 'onRouteClick'
    },

    buttons: {
        '': 'Home',
        "about": 'About',
        'third': 'Third'
    },

    initialize: function () {
        this.listenTo(Backbone.history, 'route', this.render);
    },

    render: function () {
        var el;

        var children = [];

        this.$el.empty();

        for (var prop in this.buttons) {
            el = $('<button>');
            if (prop === window.location.hash.substring(1)) {
                el.addClass('is-active');
            };

            el.text(this.buttons[prop]);
            el.data('route',prop);
            children.push(el);
        }

        this.$el.append(children);
    },

    onRouteClick: function (e) {
        window.location.hash = $(e.target).data('route');
    }

})