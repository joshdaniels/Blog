	
 var ListView = Backbone.View.extend({



  // className: "",

  el: $('.hero-unit'),

  initialize: function () {
    this.render();
    this.collection.on('change', this.render, this);
    this.collection.on('destroy', this.render, this);
    
//     $('.post_collection').append( this.el );
  },

  events: {

 	// this.$el.on ('click', this.render, this);
//   	console.log("I'm clicked");
     "click .submitBtn": "submit"
  
  },

  submit: function (event){
	event.preventDefault();
    console.log("I'm clicked");
    all_posts.add(Feed).save();


all_posts.fetch().done(function (){
	new ListView( { collection: all_posts } );
	console.log("got the data you asked for");
});

	// Grab all form data
	// Create new instance of your model
	// Add new model instance to your collection
	// Save your model - this will save it to the database && re-render the page

  },

  render: function(){
    var rendered = Handlebars.templates.post({posts: this.collection.toJSON()});
      this.$el.find(".post_collection ul").html(rendered);
      return this;
  },


  
});
