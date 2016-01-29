const LoginButtons = BlazeToReact('_loginButtons', {
    container: <ul className="nav navbar-nav navbar-right" />
});

NavbarComponent = React.createClass({
    handleClick: function(event) {
        event.preventDefault();
        const target = $(event.target);
        if (target.is('a:not([class^="dropdown"])')) {
            $(event.currentTarget).collapse('hide');
        }
    },
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href={FlowHelpers.pathFor('reactHome')}>Project name</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse" onClick={this.handleClick}>
                        <ul className="nav navbar-nav">
                            <li className={FlowHelpers.currentRoute('reactHome')}><a href={FlowHelpers.pathFor('reactHome')}>Hello</a></li>
                            <li className={FlowHelpers.currentRoute('reactSampleOverlay')}><a href={FlowHelpers.pathFor('reactSampleOverlay')}>Overlay</a></li>
                            <li className={FlowHelpers.currentRoute('reactSamplePrivate')}><a href={FlowHelpers.pathFor('reactSamplePrivate')}>Private</a></li>
                        </ul>
                        <LoginButtons />
                    </div>
                </div>
            </nav>
        );
    }
});