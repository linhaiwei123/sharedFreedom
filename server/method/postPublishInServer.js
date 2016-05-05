Meteor.methods({
    'postPublish': function(info) {
                        Post.insert({
                            userId: this.userId,
                            info: info,
                            createdAt: new Date(),
                            state: 'waitForGet'
                        });
                   }
});