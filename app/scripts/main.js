Parse.initialize("M3R1Ribp4zznVw1Zglwu1xdrdKbCORwXNp9cZ5Iz", "CsPt2AejgyMf5vvEAL2XqcXeT0GNYQ9C4QOyKwx7");
// Create an instance of my Collection


var all_posts = new Feed();

// Grab all my data from my server
// After it's complete, create a new view with data
all_posts.fetch().done(function (){
  // Define Global Router && Start History
  window.home_route = new MainRouter();
  Backbone.history.start();
  
});

var AppView = function (){

  this.showView = function(view) {
    if (this.currentView){
      //this.currentView.remove();
    }

    this.currentView = view;
    this.currentView.render();

    $(".dan").html(this.currentView.el);
  }

}

   $(document).ready(function(){
  $('.js-menu-trigger').on('click touchstart', function(e){
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });

  $('.js-menu-screen').on('click touchstart', function(e){
    $('.js-menu').toggleClass('is-visible');
    $('.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });
}); 
$(function() {
        $('#edit').editable({inlineMode: false})
    });
   
    




