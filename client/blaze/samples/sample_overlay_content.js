Template.sampleOverlayContent.events({
    'click .btn-hide-overlay': function(event, template) {
        $('.app-layout').removeClass('show-overlay');
    }
});