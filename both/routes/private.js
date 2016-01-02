const privateSection = FlowRouter.group({
    name: 'private'
});

privateSection.route('/private', {
    name: 'private',
    action() {
        BlazeLayout.render('default', {main: 'privatePage'});
    }
});
