const samplePrivatePage = ({name}) => (
    <div className="jumbotron">
        <h3>{name}, You got it!</h3>
    </div>
);
SamplePrivatePage = OnlyLoggedIn(samplePrivatePage);
