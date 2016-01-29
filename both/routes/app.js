FlowRouter.route('/', {
    name: "home",
    triggersEnter: [function(context, redirect) {
        redirect('blazeHome', context.params);
    }]
});