import ACTIONTYPES from '../utils/ACTIONTYPES';

const defaultState = {
    selectedFilter: 'All',
    allFilters: ['All', 'Minimalistic', 'Colors', 'Fun', 'Beginner', 'Intermediate', 'Advanced']
};

export default function DiscoverReducer(state = defaultState, action) {
    switch (action.type) {
        case ACTIONTYPES.DISCOVER_FILTER_CHANGED:
            return {
                ...state,
                selectedFilter: action.data
            };
        default:
            return state;
    }
}
