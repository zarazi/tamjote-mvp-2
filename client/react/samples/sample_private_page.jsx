SamplePrivatePage = (
    OnlyLoggedIn(
        ({user}) => (
            <div className="jumbotron">
                <h3>Hello, {user.emails[0].address}</h3>
            </div>
        )
    )
);
