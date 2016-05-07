Meteor.methods({
    'postDelete': function(_id) {
                        Post.remove({
                            _id: _id
                            },
                            true
                   );
    }
});