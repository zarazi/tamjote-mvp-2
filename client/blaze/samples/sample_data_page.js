Template.sampleDataPage.onCreated(function() {
    this.autorun(() => {
        this.subscribe('list');
    });
});
Template.sampleDataPage.helpers({
    ready: () => {
        return Template.instance().subscriptionsReady();
    },
    list: () => {
        return List.find().fetch();
    }
});