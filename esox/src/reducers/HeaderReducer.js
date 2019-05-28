import ACTIONTYPES from '../utils/ACTIONTYPES';

const defaultState = {
    tabs: [{
        name: 'Discover',
        path: '/discover'
    }, {
        name: 'Courses',
        path: '/courses'
    }, {
        name: 'Community',
        path: '/community'
    }],
    selectedTab: null,
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
