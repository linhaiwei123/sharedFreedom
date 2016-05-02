Meteor.startup(function () {
    
    Accounts.emailTemplates.from = "15986711808@163.com";

    
    process.env.MAIL_URL = 'smtp://15986711808@163.com:linhaiwei123@smtp.163.com'; 
    console.log(process.env.MAIL_URL); 
});