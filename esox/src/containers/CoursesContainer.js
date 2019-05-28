import { connect } from 'react-redux';
// import {
//     changeFilter,
//     selectCourse
// } from '../actions/DiscoverActions';
import {
    changeTab
} from '../actions/HeaderActions';
import CoursesComponent from '../components/Courses';

const mapStateProps = state => ({
    discover: Object.assign({}, state.discover),
    header: Object.assign({}, state.header)
});

const mapDispatchToProps = dispatch => ({
    changeTab: (tab) => {
        dispatch(changeTab(tab));
    }
});

const Courses = connect(
    mapStateProps,
    mapDispatchToProps
)(CoursesComponent);

export default Courses;
