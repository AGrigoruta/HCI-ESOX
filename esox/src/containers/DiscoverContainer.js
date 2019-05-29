import { connect } from 'react-redux';
import {
    changeFilter,
    selectCourse
} from '../actions/DiscoverActions';
import {
    changeTab
} from '../actions/HeaderActions';
import DiscoverComponent from '../components/Discover';

const mapStateProps = state => ({
    discover: Object.assign({}, state.discover),
    header: Object.assign({}, state.header)
});

const mapDispatchToProps = dispatch => ({
    changeFilter: (filter) => {
        dispatch(changeFilter(filter));
    },
    selectCourse: (course) => {
        dispatch(selectCourse(course));
    },
    changeTab: (tab) => {
        dispatch(changeTab(tab));
    }
});

const Discover = connect(
    mapStateProps,
    mapDispatchToProps
)(DiscoverComponent);

export default Discover;
