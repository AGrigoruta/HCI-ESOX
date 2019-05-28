import ACTIONTYPES from '../utils/ACTIONTYPES';

export function changeFilter(value) {
    return {
        type: ACTIONTYPES.DISCOVER_FILTER_CHANGED,
        data: value
    };
}

export function selectCourse(course) {
    return {
        type: ACTIONTYPES.COURSE_CHANGED,
        data: course
    };
}