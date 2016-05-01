Template.register.events({
    'click #backToLogin': function () {
        Router.go('/login');
    },
    
    'submit form': function (event) {
        event.preventDefault();
        
        var userName = event.target.registerUserName.value;
        var email = event.target.registerEmail.value;
        var password = event.target.registerPassword.value; 
        var passwordAgain = event.target.registerPasswordAgain.value;
        
        if(password !== passwordAgain) {
            return ;
        }
        
            

            Accounts.createUser({
                username: userName,
                email: email,
                password:password,
            }, function (err) {
                if(err){return console.log('erro in register');}
                console.log(Accounts);
                Meteor.call('sendVerifyEmail', Meteor.userId());
                Router.go('/personalInfo');
            });
        
        
    },
});