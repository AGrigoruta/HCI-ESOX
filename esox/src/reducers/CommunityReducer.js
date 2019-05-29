import ACTIONTYPES from '../utils/ACTIONTYPES';

const defaultState = {
    savedGuild: null,
    friends: null,
    members: null
};

export default function CommunityReducer(state = defaultState, action) {
    switch (action.type) {
        case ACTIONTYPES.GUILD_SAVED:
            return {
                ...state,
                savedGuild: action.data
            };
        case ACTIONTYPES.GUILD_FRIENDS_POPULATED:
            return {
                ...state,
                friends: action.data
            };
        case ACTIONTYPES.MEMBERS_POPULATED:
            return {
                ...state,
                members: action.data
            };
        default:
            return state;
    }
}
