Template.personalInfo.events({
    'click #Logout': function () {

        Meteor.logout(function () {
            Router.go('/');
        });
    },
});

Template.personalInfo.helpers({
    verified: isNotVerified()
});