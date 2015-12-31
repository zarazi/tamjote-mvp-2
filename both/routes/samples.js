FlowRouter.route('/sample-overlay', {
    name: 'sampleOverlay',
    action() {
        BlazeLayout.render('defaultOverlay', {main: 'sampleOverlayPage'});
    }
});