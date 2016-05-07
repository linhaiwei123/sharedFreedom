Template.post.helpers({
    hrefOfPostId: function () {
        return '#' + this._id;
    }
});

Template.post.events({
    'click button[name="postDelete"]': function() {
        Meteor.call('postDelete',this._id);
    },
    'click button[name="postModify"]': function() {
        //console.log(this);
        Router.go('/postModify/' + this._id);
    }
});