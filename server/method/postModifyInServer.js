Meteor.methods({
    'postModify': function(info,postId) {
                        Post.update({
                            _id: postId
                            },
                            { $set : {
                                      info: info,
                                      createdAt: new Date(),
                                      state: 'waitForGet'
                                     }
                        });
                   }
});