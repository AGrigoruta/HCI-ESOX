import { connect } from 'react-redux';
import {
    changeFilter
} from '../actions/DiscoverActions';
import DiscoverComponent from '../components/Discover';

const mapStateProps = state => ({
    discover: Object.assign({}, state.discover),
    header: Object.assign({}, state.header)
});

const mapDispatchToProps = dispatch => ({
    changeFilter: (filter) => {
        dispatch(changeFilter(filter));
    },
});

const Discover = connect(
    mapStateProps,
    mapDispatchToProps
)(DiscoverComponent);

export default Discover;
