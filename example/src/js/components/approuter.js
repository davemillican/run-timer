var AppRouter = Backbone.Router.extend ({
    
    routes: {
        '': 'home',
        'about/:param': "about",
        'about': 'about',
        'third': 'third'
    },

    home: function () {
        console.log ('nothing');
        console.log('home');
        app.trigger('show', new HomeView());
    },

    about: function (param) {
        console.log (param);
        console.log('about');
        app.trigger('show', new AboutView());
    },

    third: function () {
        app.trigger('show', new ThirdView({ parent: new AboutView}));
    }
});