SampleDataItem = ({title}) => (
  <div>{title}</div>
);

SampleDataPage = (
    WithData(
        ({ready, list}) => (
            <div className="jumbotron">
                <h3>List</h3>
                {list.map(({_id, title}) =>
                    <SampleDataItem key={_id} title={title} />
                )}
            </div>
        ),
        (props) => {
            const handle = Meteor.subscribe('list');
            return {
                ready: handle.ready(),
                list: List.find().fetch()
            }
        }
    )
);