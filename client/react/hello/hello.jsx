HelloComponent = React.createClass({
    render() {
        return (
            <div className="jumbotron">
                Hello {this.props.name}
            </div>
        );
    }
});