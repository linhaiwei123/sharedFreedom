Template.login.events({
    'click #createAccount': function () {
        Router.go('/register');
    },
    
    'submit form': function (event) {
        event.preventDefault();
        
        var email = event.target.loginEmail.value;
        var password = event.target.loginPassword.value;
        
        Meteor.loginWithPassword(email, password, function (err) {
            if(err) {
                return ;
            } else {
                Router.go('/personalInfo');
            }
        });
        
    },
});