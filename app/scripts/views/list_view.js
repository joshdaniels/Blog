var ListView = Backbone.View.extend({

  el: 'body',

  events: {
     "click .submitBtn": "submit",
     'click .card-header' : 'onePost'
  },

  initialize: function () {
    this.render();
    this.collection.on('change', this.render, this);  
    this.collection.on('add', this.render, this); 
  },

  render: function(){
    var rendered = Handlebars.templates.post({post: this.collection.toJSON()});
    this.$el.find(".post_collection").html(rendered);
    return this;
  },

  submit: function (event){
     event.preventDefault();
 
    var temp_post = new Post({
      title:  $('#title').val(),
      content: $('#edit').val(),
      author:  $('#author').val(),
      tags: $('#tags').val(),
       status: 'Published',
       date: new Date().toJSON().slice(0,10)
     });
    
     all_posts.add(temp_post);
     temp_post.save();
     this.$el.find('#blog_input').trigger( 'reset' );

   },

   onePost: function (event) {
     event.preventDefault();
     var post_id = $(event.target).attr('id');
     window.home_route.navigate('#post/'+post_id, {trigger: true});
   },

});

