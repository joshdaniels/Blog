var Post = Backbone.Model.extend({
  defaults:{

   title: "", 
  content: "", 
  date: "", 
  status: "", 
  author: "", 
  tags: [],
  tried: false
},
  idAttribute: "_id" ,

  initialize: function (){
    console.log("a new post has been created.");
  }
});