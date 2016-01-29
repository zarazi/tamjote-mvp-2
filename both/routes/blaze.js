const blazeSection = FlowRouter.group({
    name: 'blaze'
});

blazeSection.route('/blaze', {
    name: 'blazeHome',
    action() {
        BlazeLayout.render('mainLayout', {
            content: 'homePage'
        });
    }
});

