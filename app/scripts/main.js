console.log('The Iron Yard Rocks');
console.log(Backbone);
console.log(Handlebars);

all_posts.fetch().done(function (){
	new ListView( { collection: all_posts } );
});


