MainLayout = React.createClass({
    render() {
        return (
            <div className="app-root">
                <NavbarComponent />
                <div className="container page">
                    {this.props.content}
                </div>
            </div>
        );
    }
});