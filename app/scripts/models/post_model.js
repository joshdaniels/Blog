var Post = Backbone.Model.extend({
	 title: "", 
  content: "", 
  date: "", 
  status: "", 
  author: "", 
  tags: [],

  idattribute: "_id" ,

  initialize: function (){
  	console.log("a new post has been submitted.");
  }
});

