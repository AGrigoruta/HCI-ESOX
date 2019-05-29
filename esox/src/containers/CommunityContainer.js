import { connect } from 'react-redux';
import {
    changeTab
} from '../actions/HeaderActions';
import {
    saveGuild,
    getFriends,
    getMembers,
    sendFriends,
    sendMembers
} from '../actions/CommunityActions';
import CommunityComponent from '../components/Community';

const mapStateProps = state => ({
    discover: Object.assign({}, state.discover),
    header: Object.assign({}, state.header),
    community: Object.assign({}, state.community)
});

const mapDispatchToProps = dispatch => ({
    changeTab: (tab) => {
        dispatch(changeTab(tab));
    },
    saveGuild: (guild) => {
        dispatch(saveGuild(guild));
    },
    getFriends: (amount) => {
        dispatch(getFriends(amount));
    },
    getMembers: (amount) => {
        dispatch(getMembers(amount));
    },
    sendFriends: (friends) => {
        dispatch(sendFriends(friends));
    },
    sendMembers: (friends) => {
        dispatch(sendMembers(friends));
    },
});

const Community = connect(
    mapStateProps,
    mapDispatchToProps
)(CommunityComponent);

export default Community;
