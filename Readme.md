##¸„.-•~¹°”ˆ˜¨ BĻÖĠ ¨˜ˆ”°¹~•-.„¸


We are going to be building a blog this week. Today is the first part, get use to setting up Models, Collections and Views. Also, this is a good time to start using Handlebars as your template engine.

I've attached a mockup or what you saw on the board.

You will continue to use the URL for your project - http://tiy-atl-fe-server.herokuapp.com/collections/ - for this application.

Here is the data you will need to use

{
  "title": "", // String
  "content": "", // String
  "date": "", // String
  "status": "", // String
  "author": "", // String
  "tags": [] // Array of Strings
}

You are required to use both Backbone and Handlebars and the actions should be as followed:

1. Create a post => sends data to the server after you click "Create Post"
2. The new post should be prepended to the top of the post list (newest first)
3. The data should persist
4. All properties (except status) should be visible in the blog section

Bonus: Upon refresh, sort the blog posts by date

Tonights iteration does NOT need to be deployed anywhere, it eventually will though.

This homework will be due Monday, July 21st. - Check Thursday's homework for a final list of what needs to be included.
