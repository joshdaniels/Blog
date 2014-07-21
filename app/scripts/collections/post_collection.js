var Feed = Backbone.Collection.extend({

    model: Post,
    url: window.whiskey_url || 'http://tiy-atl-fe-server.herokuapp.com/collections/joshuas-blog-test2',
});