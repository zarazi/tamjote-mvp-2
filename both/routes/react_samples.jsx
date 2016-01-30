const reactSamplesSection = FlowRouter.group({
    name: 'reactSamples',
    prefix: '/react/samples'
});

reactSamplesSection.route('/overlay', {
    name: 'reactSampleOverlay',
    action() {
        ReactLayout.render(MainOverlay, {
            content: <SampleOverlayPage />,
            overlay: <SampleOverlayContent />
        });
    }
});

reactSamplesSection.route('/private', {
    name: 'reactSamplePrivate',
    action() {
        ReactLayout.render(MainLayout, {
            content: <SamplePrivatePage />
        });
    }
});

reactSamplesSection.route('/data', {
    name: 'reactSampleData',
    action() {
        ReactLayout.render(MainLayout, {
            content: <SampleDataPage />
        });
    }
});

reactSamplesSection.route('/private/data', {
    name: 'reactSamplePrivateData',
    action() {
        ReactLayout.render(MainLayout, {
            content: <SamplePrivateDataPage />
        });
    }
});