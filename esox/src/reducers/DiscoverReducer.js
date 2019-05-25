import ACTIONTYPES from '../utils/ACTIONTYPES';

const defaultState = {
    pageName: 'Discover',
    isFetching: false,
    user: null
};

export default function DiscoverReducer(state = defaultState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
