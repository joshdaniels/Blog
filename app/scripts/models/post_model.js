var Post = Parse.Object.extend({
  
className: "Blog_posts",

  defaults:{

   title: "", 
  content: "", 
  date: "", 
  status: "", 
  author: "", 
  tags: [],
  tried: false
},
  idAttribute: "objectId" ,

  initialize: function (){
    console.log("a new post has been created.");
  }
});




