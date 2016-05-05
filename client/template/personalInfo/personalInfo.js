Template.personalInfo.events({
    'click #Logout': function () {

        Meteor.logout(function () {
            Router.go('/');
        });
    },
    
    'click div[name="postItem"]': function (event) {
        // let _id = this._id;
        // let userId = this.userId;
        // let info = this.info;
        // let state = this.state;
        // console.log(_id,userId,info,state);
        // console.log('here');
        //Router.go('/postModify', _id);
        event.target.postViewItem.classList.remove('show');
        event.target.postViewItem.classList.add('hide');
        event.target.postEditItem.classList.remove('hide');
        event.target.postEditItem.classList.add('show');
       
        
    },
    
    'blur div[name="postItem"]': function (event) {
        event.target.postEditItem.classList.remove('show');
        event.target.postEditItem.classList.add('hide');
        event.target.postViewItem.classList.remove('hide');
        event.target.postViewItem.classList.add('show');
    },
    
    
});

Template.personalInfo.helpers({
    verified: isNotVerified
});