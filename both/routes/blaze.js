const blazeSection = FlowRouter.group({
    name: 'blaze'
});

blazeSection.route('/', {
    name: 'home',
    action() {
        BlazeLayout.render('default', {main: 'homePage'});
    }
});

