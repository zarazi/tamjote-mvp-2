SampleDataPage = (
    WithData(
        ({data}) => (
            <div className="jumbotron">
                <h3>Hello {data}</h3>
            </div>
        ),
        (props) => {
            return {
                data: 'Data'
            }
        }
    )
);