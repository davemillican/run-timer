var appRouter = new AppRouter();

var app = _.extend({}, Backbone.Events);

var barView = new BarView();
var appView = new AppView({ barView: barView });

appView.render();

$('#app').append(appView.$el);

Backbone.history.start();