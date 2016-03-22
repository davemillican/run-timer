
var $ = require ('jquery');
var _ = require ('underscore');
var Backbone = require ('backbone');
var AppView = require ('./components/AppView');
var AppRouter = require ('./components/AppRouter');



var appView = new AppView();
var appRouter = new AppRouter();

$('#app-dock').append(appView.$el);

appView.render();

Backbone.history.start();