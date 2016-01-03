OnlyLoggedIn = function (Component) {
    return React.createClass({
        mixins: [ReactMeteorData],
        getMeteorData() {
            return {
                currentUser: Meteor.user()
            }
        },
        render: function() {
            return ( this.data.currentUser
                ?   <Component {...this.props}/>
                :   <span> Please log in to see this page. </span>
            );
        }
    });
};