SampleOverlayPage = React.createClass({
    handleClick(event) {
        event.preventDefault();
        $('.app-layout').addClass('show-overlay');
    },
    handleKeyUp(event) {
        if (event.which===27) {
            $('.app-layout').removeClass('show-overlay');
        }
    },
    render() {
        return (
            <div className="jumbotron" onKeyUp={this.handleKeyUp}>
                <h2>Sample Overlay Page</h2>
                <a href="#" className="btn btn-primary btn-show-overlay" onClick={this.handleClick}>Show Overlay</a>
            </div>
        );
    }
});