Template.navDefault.events({
    'click .navbar-collapse': (event, template)=>{
        const target = $(event.target);
        if (target.is('a:not([class^="dropdown"])')) {
            $(event.currentTarget).collapse('hide');
        }
    }
});