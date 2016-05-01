Template.personalInfo.events({
    'click #Logout': function () {

        Meteor.logout(function () {
            Router.go('/');
        });
    },
});

Template.personalInfo.helpers({
    verified: function () {
        return ! (Meteor.user() && Meteor.user().emails && Meteor.user().emails[0].verified);
    }
});