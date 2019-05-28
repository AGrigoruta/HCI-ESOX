import ACTIONTYPES from '../utils/ACTIONTYPES';

export function saveCourse(course) {
    return {
        type: ACTIONTYPES.COURSE_SAVED,
        data: course
    };
}