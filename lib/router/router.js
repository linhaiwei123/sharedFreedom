Router.configure({
    layoutTemplate: 'home'
});

Router.route('/',{name: 'postList'});

Router.route('/personal',function () {
    if( !Meteor.userId() ){
       Router.go('/login');
    } else {
       Router.go('/personalInfo');
    }

});

Router.route('/register', {name: 'register'});

Router.route('/login', {name: 'login'});

Router.route('/personalInfo', {name: 'personalInfo'});