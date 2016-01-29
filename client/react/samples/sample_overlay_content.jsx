SampleOverlayContent = React.createClass({
    handleClick(event) {
        event.preventDefault();
        $('.app-layout').removeClass('show-overlay');
    },
    render() {
        return (
            <div className="overlay-content">
                <p className="top-right text-center">
                    <a href="#" className="btn-float btn-hide-overlay" onClick={this.handleClick}>
                        <i className="fa fa-times"></i>
                    </a>
                </p>
            </div>
        );
    }
});