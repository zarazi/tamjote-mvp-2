const blazeSamplesSection = FlowRouter.group({
    name: 'blazeSamples',
    prefix: '/blaze-samples'
});

blazeSamplesSection.route('/overlay', {
    name: 'sampleOverlay',
    action() {
        BlazeLayout.render('defaultOverlay', {
            main: 'sampleOverlayPage',
            overlay: 'sampleOverlayContent'
        });
    }
});

blazeSamplesSection.route('/private', {
    name: 'samplePrivate',
    action() {
        BlazeLayout.render('default', {main: 'privatePage'});
    }
});