	
 var ListView = Backbone.View.extend({



  // className: "",

  el: '.hero-unit',

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
    var rendered = Handlebars.templates.post({posts: this.collection.toJSON()});
    this.$el.find(".post_collection ul").html(rendered);
    return this;
  },

  submit: function (event){
	event.preventDefault();
    console.log("I'm clicked");
 
    var temp_post = new Post({
      title:  $('#title').val(),
      content: $('#post').val(),
      author:  $('#author').val(),
      tags: $('#tags').val(),
	  status: 'Published',
	  date: new Date().toJSON().slice(0,10)
	});
	
	all_posts.add(temp_post).save();

   }



});

new ListView( { collection: all_posts } );

























// all_posts.fetch().done(function (){
// 	
// 	console.log("got the data you asked for");
// 	var note = new Post();
// all_posts.add(note).save();
// console.log("and i returned it to the server.free of charge.");
// });



	// Grab all form data 
	// Create new instance of your model
	// Add new model instance to your collection
	// Save your model - this will save it to the database && re-render the page

//   },


 

// create_post:function(e){
//   e.preventDefault();
//   var temp_post,
//     title = $('#title').val(),
//     content = $('#post').val(),
//     author = $('#author').val(),
//     tags = $('#tags').val(),

//   temp_post = new Post({
//     title: title,
//     author: author,
//     content: content,
//     tags: tags.replace(/\s+/g, '').split(','),
//     status: 'Published',
//     date: new Date().toJSON().slice(0,10)
//   });

//   all_posts.add(temp_post).save();

//   this.$el.find('form').trigger('reset');
// }, 

// });
