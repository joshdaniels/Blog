var MainRouter = Backbone.Router.extend({

   // Defining my Routes
  routes: {
    '' : 'home',
    'post/:id' : 'post'
  },
 
  initialize: function () {
    this.appView = new AppView();
  },

  home: function () {
    var listView = new ListView({ collection: all_posts });
    this.appView.showView(listView);
  },

  post: function (id) {
    var postview = new PostView({ postid: id, collection: all_posts });
    this.appView.showView(postview);
  }
});
