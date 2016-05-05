Meteor.publish('posts', function () {
    return Post.find();
});