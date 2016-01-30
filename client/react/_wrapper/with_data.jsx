WithData = function (Component, getMeteorData) {
    return React.createClass({
        displayName: 'WithData',
        mixins: [ReactMeteorData],
        getMeteorData() {
            return getMeteorData(this.props);
        },
        render() {
            return ( this.data.ready
                ?   <Component {...this.props} {...this.data} />
                :   <div>Loading ...</div>
            );
        }
    });
};