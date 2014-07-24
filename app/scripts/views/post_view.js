var PostView = Backbone.View.extend({

	el: 'body', //'.hero-unit',

	events: {
		"click .fa-trash-o" : "deletePost"
	    // "click #post_feed_container ul": "fullPost",
	},

	initialize: function(a){
	    this.options = a; ;
	    this.render();
	},

	render: function(){
		var lone = this.collection.get(this.options.postid); 
	    var rendered = Handlebars.templates.single(lone.toJSON());
	    this.$el.find('.hero-unit').html(rendered);   
	},

	deletePost: function (event) {
		console.log("test");
		event.preventDefault();
		event.stopPropagation();
		if (window.confirm("delete this post?")) {
			console.log(this.options.postid);
			var lone = this.collection.get(this.options.postid); 
			lone.destroy({success: function () {
				window.home_route.navigate('', { trigger: true }); 
			}});
		}
	}
});
