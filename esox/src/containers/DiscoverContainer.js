import { connect } from 'react-redux';
import DiscoverComponent from '../components/Discover';

const mapStateProps = state => ({
    discover: Object.assign({}, state.discover)
});

const mapDispatchToProps = dispatch => ({

});

const Discover = connect(
    mapStateProps,
    mapDispatchToProps
)(DiscoverComponent);

export default Discover;
