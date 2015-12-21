Meteor.methods({
    hello(me='there') {
        return `Hello ${me}`;
    }
});