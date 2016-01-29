Template.sampleOverlayPage.events({
    'click .btn-show-overlay': function(event, template) {
        $('.app-layout').addClass('show-overlay');
    },

    'keyup': function(event, template) {
        if (event.which===27) {
            $('.app-layout').removeClass('show-overlay');
        }
    }
});
