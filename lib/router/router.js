Router.configure({
    layoutTemplate: 'home',
    waitOn: function () {
        return Meteor.subscribe('posts');
    }
});

Router.route('/',{
    name: 'postList',
    data: {
        posts: Post.find()
    }
});

Router.route('/personal',function () {
    if( !Meteor.userId() ){
       Router.go('/login');
    } else {
       Router.go('/personalInfo');
    }

}, {
    name: 'personal'
});

Router.route('/publish',function () {
    if( !Meteor.userId() ){
       Router.go('/login');
    } else  if ( isNotVerified() ) {
       Router.go('/personalInfo');
    } else {
       Router.go('/postPublish');
    }

}, {
    name: 'publish'
});

Router.route('/register', {name: 'register'});

Router.route('/login', {name: 'login'});

Router.route('/personalInfo',
    function () {
        var posts =  Post.find({ userId: Meteor.userId() });
        this.render('personalInfo',{
            data: {
                posts: posts
            }
        });
    },
    {
        name: 'personalInfo',
        // data: {
        //     posts: Post.find()
        // }    
    });

Router.route('/postPublish', {name: 'postPublish'});

Router.route('/postModify', function () {
    
});