var Feed = Backbone.Collection.extend({

    model: Post,
    url: "http://tiy-atl-fe-server.herokuapp.com/collections/joshuas-blog-test"
});

var all_posts = new Feed();