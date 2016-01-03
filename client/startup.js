Meteor.startup(()=>{
    Accounts.onLogin(()=>{
        $('.navbar-collapse').collapse('hide');
    });

    accountsUIBootstrap3.logoutCallback = (error) => {
        $('.navbar-collapse').collapse('hide');
    }
});