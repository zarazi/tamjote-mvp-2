const reactSection = FlowRouter.group({
    name: 'react'
});

reactSection.route('/react-hello', {
    name: 'reactHello',
    action() {
        ReactLayout.render(MainLayout, {
            content: <HelloComponent name="Zarazi" />
        });
    }
});