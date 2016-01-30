List = new Meteor.Collection( 'List' );

List.schema = new SimpleSchema({
    title: {
        type: String
    },
    date_created: {
        type: Date,
        optional: true,
        autoValue: function() {
            if (this.isInsert) {
                return new Date();
            } else if (this.isUpsert) {
                return {$setOnInsert: new Date()};
            } else {
                this.unset();  // Prevent user from supplying their own value
            }
        }
    }
});

List.attachSchema( List.schema );

//List.allow({
//    insert: (userId, document) => false,
//    update: () => false,
//    remove: () => false
//});
//
//List.deny({
//    insert: () => true,
//    update: () => true,
//    remove: () => true
//});
