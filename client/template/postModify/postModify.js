Template.postPublish.events({
    'submit form': function (event) {
        event.preventDefault();
        
        var title = event.target.title.value;
        var content = event.target.content.value;
        var telephone = event.target.telephone.value;
        var money = event.target.money.value;
        var getType = event.target.getType.dataset.gettype;
        // console.log({title,content,telephone,money,getType});
        console.log( Meteor.user() );
        Meteor.call('postModify',{
            title : title,
            content : content,
            telephone : telephone,
            money : money,
            getType : getType,
            userInfo: Meteor.user(),
        }
        
        );
        
    },
    
    'click #getType': function(event) {
        if( event.target.dataset.gettype === 'firstInFirstGet' ) {
            event.target.classList.remove('btn-danger');
            event.target.classList.add('btn-success');
            event.target.innerText = '多人竞标'
            event.target.dataset.gettype = 'compactWithOther'
        } else {
            event.target.classList.remove('btn-success');
            event.target.classList.add('btn-danger');
            event.target.innerText = '先到先得'
            event.target.dataset.gettype = 'firstInFirstGet'
        }
    }
});

Template.postPublish.helpers({
    
});
