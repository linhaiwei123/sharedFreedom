Accounts.onEmailVerificationLink(function (token, done) {
    Accounts.verifyEmail(token, function (err) {
        if(err){
            return console.log(err);
        } 
        Router.go('/personalInfo');
    });
});