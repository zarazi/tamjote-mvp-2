const publicSection = FlowRouter.group({
    name: 'public'
});

publicSection.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('default', {main: 'homePage'});
    }
});
