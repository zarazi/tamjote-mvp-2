MainOverlay = React.createClass({
    render() {
        return (
            <div className="app-root">
                <div className="notifications"></div>
                <div className="app-layout">
                    <NavbarComponent />
                    <div className="app-overlay">
                        {this.props.overlay}
                    </div>
                    <div className="app-content">
                        <div className="container page">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});