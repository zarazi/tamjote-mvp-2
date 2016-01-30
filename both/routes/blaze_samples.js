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

blazeSamplesSection.route('/data', {
    name: 'blazeSampleData',
    action() {
        BlazeLayout.render('mainLayout', {
            content: 'sampleDataPage'
        });
    }
});

blazeSamplesSection.route('/private/data', {
    name: 'blazeSamplePrivateData',
    action() {
        BlazeLayout.render('mainLayout', {
            content: 'samplePrivateDataPage'
        });
    }
});