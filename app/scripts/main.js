// console.log('The Iron Yard Rocks');
// console.log(Backbone);
// console.log(Handlebars);
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




