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

reactSection.route('/react-hello-overlay', {
    name: 'reactHelloOverlay',
    action() {
        ReactLayout.render(MainLayout, {
            content: <HelloOverlayComponent name="Zarazi" />,
            overlay: <OverlayComponent />
        });
    }
});