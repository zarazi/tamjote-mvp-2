MainLayout = React.createClass({
    render() {
        return  <div>
                    <div className="notifications"></div>
                    <div className="app-layout">
                        <NavbarComponent />
                        <div className="app-overlay">
                            <div className="overlay-content">
                                <p className="top-right text-center">
                                    <a href="#" className="btn-float btn-hide-overlay">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="app-content">
                            <div className="container page">
                                {this.props.content}
                            </div>
                        </div>
                    </div>
                </div>
    }
});