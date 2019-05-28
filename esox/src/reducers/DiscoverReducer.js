import ACTIONTYPES from '../utils/ACTIONTYPES';

const defaultState = {
    selectedFilter: 'All',
    allFilters: ['All', 'Minimalistic', 'Colors', 'Fun', 'Beginner', 'Intermediate', 'Advanced'],
    selectedCourse: null
};

export default function DiscoverReducer(state = defaultState, action) {
    switch (action.type) {
        case ACTIONTYPES.DISCOVER_FILTER_CHANGED:
            return {
                ...state,
                selectedFilter: action.data
            };
        case ACTIONTYPES.COURSE_CHANGED:
            return {
                ...state,
                selectedCourse: action.data
            };
        default:
            return state;
    }
}
