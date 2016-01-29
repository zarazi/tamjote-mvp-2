SampleOverlayPage = React.createClass({
    handleClick(event) {
        event.preventDefault();
        $('.app-layout').addClass('show-overlay');
    },
    render() {
        return (
            <div className="jumbotron">
                <h2>Sample Overlay Page</h2>
                <a href="#" className="btn btn-primary btn-show-overlay" onClick={this.handleClick}>Show Overlay</a>
            </div>
        );
    }
});