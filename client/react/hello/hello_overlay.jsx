HelloOverlayComponent = React.createClass({
    handleClick(event) {
        event.preventDefault();
        $('.app-layout').addClass('show-overlay');
    },
    render() {
        return (
            <div className="jumbotron">
                Hello {this.props.name}<br/>
                <a href="#" className="btn btn-primary btn-show-overlay" onClick={this.handleClick}>Show Overlay</a>
            </div>
        );
    }
});