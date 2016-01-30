SamplePrivateUser = OnlyLoggedInElse(
    ({user}) => (
        <div className="jumbotron">
            <h3>Hello, {user.emails[0].address}</h3>
        </div>
    ),
    () => (
        <div className="jumbotron">Please login to see this content</div>
    )
);

SamplePrivateDataUserPage = () => (
    <div>
        <SamplePrivateUser />
        <SampleDataPage />
    </div>
);