Meteor.methods({
    'postModify': function(info) {
                        console.log('here');
                        console.log(info);
                        console.log(info.postId);
                        Post.update({
                            _id: info.postId
                            },
                            { $set : {
                                      info: info,
                                      createdAt: new Date(),
                                      state: 'waitForGet'
                                     }
                        });
                   }
});