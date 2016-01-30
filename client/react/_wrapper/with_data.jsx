WithData = function (Component, getMeteorData) {
    return React.createClass({
        displayName: 'WithData',
        mixins: [ReactMeteorData],
        getMeteorData() {
            return getMeteorData(this.props);
        },
        render() {
            return <Component {...this.props} {...this.data} />
        }
    });
};