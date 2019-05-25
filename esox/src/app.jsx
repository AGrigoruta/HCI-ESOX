import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//core componets

//page components
import Discover from './containers/DiscoverContainer';
import Header from './containers/HeaderContainer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <main>
                <Header />
                <Route exact path="/" render={() => (<Redirect to="/discover" />)} />
                <Route exact path="/discover" component={Discover} />
            </main>
        );
    }
}

const mapStateToProps = (state) => {
    return ({
        app: state,
    });
};

export default connect(mapStateToProps)(App);
