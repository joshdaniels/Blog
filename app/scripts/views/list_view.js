	
 
  
  
 
 var ListView = Backbone.View.extend({



  // className: "",

  el: 'body',

  events: {

      // this.$el.on ('click', this.render, this);
       // console.log("I'm clicked");
     "click .submitBtn": "submit",
      // 'click .card-header' : 'goToPost',
      'click .card-header' : 'onePost'
  },

  initialize: function () {
    this.render();
    this.collection.on('change', this.render, this);
    this.collection.on('destroy', this.render, this);
    
  
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
    
     all_posts.add(temp_post).save();
     this.$el.find( '#blog_input' ).trigger( 'reset' );

   },






     // goToPost: function (event) {
        // console.log("testing2");
        //  event.preventDefault(); // Prevents the default click event
        //  event.stopPropagation(); // Helps stop the bubbling up effect
        //  var item_clicked = $(event.currentTarget); // Gets the object I clicked
        //  var post_id = item_clicked.attr('id'); // Gets the ID of that object
          
        
        //  var spec_post = this.collection.get(post_id); // Gets the instance of my model with the ID
        
          

        //  if (tried) {
        //    spec_post.set({ tried: false }).save();
        //  } else {
        //    spec_post.set({ tried: true }).save();
        //  }
        
     // },
     // go_to_post: function(e){
     //     e.preventDefault();
     //     var post_id = $(e.target).attr('id');
     //     console.log(e.target);
     //     console.log(post_id);
     //     window.home_route.navigate('#posts_page/'+post_id, {trigger: true});
     //   },

   onePost: function (event) {
    
     event.preventDefault();
    // event.stopPropagation();


    
     // var item_clicked = $(event.currentTarget); // Gets the object I clicked
     var post_id = $(event.target).attr('id');
    
     // var spec_post = this.collection.get(post_id); // Gets the instance of my model with the ID
    
      

     // if (tried) {
     //   spec_post.set({ tried: false }).save();
     // } else {
     //   spec_post.set({ tried: true }).save();
     // }

    
     window.home_route.navigate('#post/'+post_id, {trigger: true});
     

   },



});