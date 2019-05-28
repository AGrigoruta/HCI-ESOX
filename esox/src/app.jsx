import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//core componets

//page components
import Discover from './containers/DiscoverContainer';
import Header from './containers/HeaderContainer';
import Courses from './containers/CoursesContainer';

class App extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <Route exact path="/" render={() => (<Redirect to="/discover" />)} />
                <Route exact path="/discover" component={Discover} />
                <Route exact path="/courses" component={Courses} />
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
