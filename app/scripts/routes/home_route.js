var MainRouter = Backbone.Router.extend({

   // Defining my Routes
  routes: {
    '' : 'home',
    'post/:id' : 'view'
  },

  // What happens when I hit the url '/'
  // Loads my main list view
  home: function () {

    new ListView({ collection: all_posts });
  },

  // My edit screen
  // Loads a screen while editing the specific whiskey from the id passed in the url (:id)
  view: function (id) {

    new PostView({ postid: id, collection: all_posts });
  }

});