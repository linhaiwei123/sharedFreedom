Template.postPublish.events({
    'submit form': function (event) {
        event.preventDefault();
        
        var title = event.target.title.value;
        var content = event.target.content.value;
        var telephone = event.target.telephone.value;
        var money = event.target.money.value;
        console.log(title,content,telephone,money);
    },
    
    'click #firstInFirstGet': function(event) {
        
    }
});

Template.postPublish.helpers({
    
});