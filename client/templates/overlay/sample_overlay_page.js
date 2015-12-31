Template.sampleOverlayPage.events({
    'click .btn-show-overlay': function(event, template) {
        $('.app-layout').addClass('searching');
    },

    'keyup': function(event, template) {
        //console.log(event.which);
        if (event.which===27) {
            $('.app-layout').removeClass('searching');
        }
    }
});