isNotVerified = function () {
    return ! (Meteor.user() && Meteor.user().emails && Meteor.user().emails[0].verified);
}