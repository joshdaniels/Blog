var PostView = Backbone.View.extend({



  el: '.hero-unit',

  events: {

    // "click #post_feed_container ul": "fullPost",
  },

  initialize: function(a){
    this.collection.on('change', this.render, this);
    this.collection.on('destroy', this.render, this);
    this.options = a;
    this.render();
},

  render: function(){
  var lone = this.collection.get(this.options.postid); 

    var rendered = Handlebars.templates.single(lone.toJSON());
    // this.$el.find("#full_posts_container ul").trigger('reset').html(rendered);
    //this.$el.prev().html('');
    this.$el.html(rendered);
},


});
