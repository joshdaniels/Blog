// console.log('The Iron Yard Rocks');
// console.log(Backbone);
// console.log(Handlebars);

// $('.sliding-menu-content').blurjs({
// 	source: 'body',
// 	radius: 7,
// 	overlay: 'rgba(255,255,255,0.4)'
// });
// 

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
   $(".sliding-menu-content").blear({
    // Options
    radius:       "15", // Blur radius
    background:   "#ffffff",
    opacity:      "60",
    wrapperClass: ".blear-wrap",
    blurClass:    ".blear"
});

    




