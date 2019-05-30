import { connect } from 'react-redux';
import {
    selectCourse,
    getFriends,
    sendFriends
} from '../actions/DiscoverActions';
import {
    changeTab
} from '../actions/HeaderActions';
import {
    saveCourse,
} from '../actions/CoursesActions';
import TutorialBefunge from '../components/TutorialBefunge';

const mapStateProps = state => ({
    discover: Object.assign({}, state.discover),
    header: Object.assign({}, state.header),
    courses: Object.assign({}, state.courses)
});

const mapDispatchToProps = dispatch => ({
    changeTab: (tab) => {
        dispatch(changeTab(tab));
    },
    saveCourse: (course) => {
        dispatch(saveCourse(course));
    },
    getFriends: (amount) => {
        dispatch(getFriends(amount));
    },
    sendFriends: (friends) => {
        dispatch(sendFriends(friends));
    },
    selectCourse: (course) => {
        dispatch(selectCourse(course));
    }
});

const TutorialBefungeC = connect(
    mapStateProps,
    mapDispatchToProps
)(TutorialBefunge);

export default TutorialBefungeC;
