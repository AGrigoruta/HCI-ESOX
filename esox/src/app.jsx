import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

//core componets

//page components
import Discover from './containers/DiscoverContainer';
import Header from './containers/HeaderContainer';
import Courses from './containers/CoursesContainer';
import Community from './containers/CommunityContainer';
import TutorialBefunge from './containers/TutorialBefungeContainer';
import TutorialPiet from './containers/TutorialPietContainer';

class App extends React.Component {
    render() {
        return (
            <main>
                <Header />
                <Route exact path="/" render={() => (<Redirect to="/discover" />)} />
                <Route exact path="/discover" component={Discover} />
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/community" component={Community} />
                <Route exact path="/tutorialBefunge" component={TutorialBefunge} />
                <Route exact path="/tutorialPiet" component={TutorialPiet} />
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
