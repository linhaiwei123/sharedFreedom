Template.postModify.onRendered(function(){
    let initToggleGetTypeNode = Template.instance().$('#getType')[0];

     if( initToggleGetTypeNode.dataset.gettype === 'firstInFirstGet' ) {
            initToggleGetTypeNode.classList.add('btn-danger');
            initToggleGetTypeNode.innerText = '先到先得'
            initToggleGetTypeNode.dataset.gettype = 'firstInFirstGet'

        } else {
            initToggleGetTypeNode.classList.add('btn-success');
            initToggleGetTypeNode.innerText = '多人竞标'
            initToggleGetTypeNode.dataset.gettype = 'compactWithOther'
        }
});


Template.postModify.events({
    'submit form': function (event) {
        event.preventDefault();
        
        var title = event.target.title.value;
        var content = event.target.content.value;
        var telephone = event.target.telephone.value;
        var money = event.target.money.value;
        var getType = event.target.getType.dataset.gettype;
        var postId = this.infoPackage._id;
        // console.log({title,content,telephone,money,getType,postId});
        // console.log( Meteor.user() );
        Meteor.call('postModify',{
            title : title,
            content : content,
            telephone : telephone,
            money : money,
            getType : getType,
            userInfo: Meteor.user(),
            postId: postId
        });
        
    },
    
    'click #getType': function(event){
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

Template.postModify.helpers({
    
});


