import ACTIONTYPES from '../utils/ACTIONTYPES';

const defaultState = {
    savedCourses: [],
};

export default function CoursesReducer(state = defaultState, action) {
    switch (action.type) {
        case ACTIONTYPES.COURSE_SAVED:
            return {
                ...state,
                savedCourses: action.data
            };
        default:
            return state;
    }
}
