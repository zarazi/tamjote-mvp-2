const samplesSection = FlowRouter.group({
    name: 'samples'
});

samplesSection.route('/sample-overlay', {
    name: 'sampleOverlay',
    action() {
        BlazeLayout.render('defaultOverlay', {main: 'sampleOverlayPage'});
    }
});