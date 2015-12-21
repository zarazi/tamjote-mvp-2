FlowRouter.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('default', {main: 'homePage'});
    }
});