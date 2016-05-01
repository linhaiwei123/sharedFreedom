Meteor.methods({
    'sendVerifyEmail': function(userId) {
                       console.log('server verifyEmail here');
                       Accounts.sendVerificationEmail(userId);
                       }
});