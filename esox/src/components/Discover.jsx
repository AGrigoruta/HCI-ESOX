import React from 'react';
import { withRouter } from 'react-router-dom';


class DiscoverComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    navTo(el) {
        console.log(this.props)
        this.props.history.push(el.path);
    }

    render() {
        return (
            <div>
                Discover stuff
            </div>
        );
    }
}

export default withRouter(DiscoverComponent);
