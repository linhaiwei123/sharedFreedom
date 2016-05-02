Meteor.methods({
    'sendVerifyEmail': function(userId) {
                       Accounts.sendVerificationEmail(userId);
                       }
});

