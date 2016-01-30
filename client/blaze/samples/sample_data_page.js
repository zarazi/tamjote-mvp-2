Template.sampleDataPage.onCreated(function() {
    this.autorun(() => {
        this.subscribe('list');
    });
});
Template.sampleDataPage.helpers({
   list: () => {
       return List.find().fetch();
   }
});