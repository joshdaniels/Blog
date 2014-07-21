// console.log('The Iron Yard Rocks');
// console.log(Backbone);
// console.log(Handlebars);

// $('.sliding-menu-content').blurjs({
//  source: 'body',
//  radius: 7,
//  overlay: 'rgba(255,255,255,0.4)'
// });
// 

// Create an instance of my Collection
var all_posts = new Feed();

// Grab all my data from my server
// After it's complete, create a new view with data
all_posts.fetch().done(function (){
  // Define Global Router && Start History
  window.home_route = new MainRouter();
  Backbone.history.start();


});



  

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
   
    




