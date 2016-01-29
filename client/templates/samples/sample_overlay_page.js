Template.sampleOverlayPage.events({
    'click .btn-show-overlay': function(event, template) {
        $('.app-layout').addClass('show-overlay');
    },

    'keyup': function(event, template) {
        //console.log(event.which);
        if (event.which===27) {
            $('.app-layout').removeClass('show-overlay');
        }
    }
});

Template.sampleOverlayContent.events({
    'click .btn-hide-overlay': function(event, template) {
        $('.app-layout').removeClass('show-overlay');
    }
});