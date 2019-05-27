import ACTIONTYPES from '../utils/ACTIONTYPES';

export function changeFilter(value) {
    return {
        type: ACTIONTYPES.DISCOVER_FILTER_CHANGED,
        data: value
    };
}