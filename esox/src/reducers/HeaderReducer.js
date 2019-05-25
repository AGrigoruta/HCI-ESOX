import ACTIONTYPES from '../utils/ACTIONTYPES';

const defaultState = {
    tabs: ['Discover', 'Courses', 'Community'],
    selectedTab: 'Discover',
    loggedIn: false,
    user: null,
};

export default function HeaderReducer(state = defaultState, action) {
    switch (action.type) {
        case ACTIONTYPES.TAB_CHANGED:
            return {
                ...state,
                selectedTab: action.data
            };
        case ACTIONTYPES.USER_LOGGED_IN:
            return {
                ...state,
                loggedIn: true,
                user: action.data
            };
        case ACTIONTYPES.USER_LOGGED_OUT:
            return {
                ...state,
                loggedIn: false,
                user: null
            };
        default:
            return state;
    }
}
