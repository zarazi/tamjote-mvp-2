SamplePrivatePage = OnlyLoggedIn(React.createClass({
    render() {
        return  (
            <div className="jumbotron">
                <h3>{this.props.name}, You got it!</h3>
            </div>
        );
    }
}));