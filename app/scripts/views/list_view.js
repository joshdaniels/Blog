	
 var ListView = Backbone.View.extend({



  // className: "",

  el: 'body',

  events: {

 	// this.$el.on ('click', this.render, this);
//   	console.log("I'm clicked");
     "click .submitBtn": "submit"
  },

  initialize: function () {
    this.render();
    this.collection.on('change', this.render, this);
    this.collection.on('destroy', this.render, this);
    
  
  },

  render: function(){
    var rendered = Handlebars.templates.post({post: this.collection.toJSON()});
	console.log(this.collection.toJSON());
    this.$el.find(".post_collection").html(rendered);
	console.log("you are in");
	// console.log(rendered);
    return this;
  },

  submit: function (event){
	event.preventDefault();
    console.log("I'm clicked");
 
    var temp_post = new Post({
      title:  $('#title').val(),
      content: $('#edit').val(),
      author:  $('#author').val(),
      tags: $('#tags').val(),
	  status: 'Published',
	  date: new Date().toJSON().slice(0,10)
	});
	
	all_posts.add(temp_post).save();
	this.$el.find( '#blog_input' ).trigger( 'reset' );

   }



});
all_posts.fetch().done(function (){
	new ListView( { collection: all_posts } );
});
























