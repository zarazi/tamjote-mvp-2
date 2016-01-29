const reactSection = FlowRouter.group({
    name: 'react'
});

reactSection.route('/react', {
    name: 'reactHome',
    action() {
        ReactLayout.render(MainLayout, {
            content: <HomePage />
        });
    }
});
