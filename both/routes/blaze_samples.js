const blazeSamplesSection = FlowRouter.group({
    name: 'blazeSamples',
    prefix: '/blaze/samples'
});

blazeSamplesSection.route('/overlay', {
    name: 'blazeSampleOverlay',
    action() {
        BlazeLayout.render('mainOverlay', {
            content: 'sampleOverlayPage',
            overlay: 'sampleOverlayContent'
        });
    }
});

blazeSamplesSection.route('/private', {
    name: 'blazeSamplePrivate',
    action() {
        BlazeLayout.render('mainLayout', {
            content: 'samplePrivatePage'
        });
    }
});