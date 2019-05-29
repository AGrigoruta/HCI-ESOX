import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import DiscoverReducer from '../reducers/DiscoverReducer';
import HeaderReducer from '../reducers/HeaderReducer';
import CoursesReducer from '../reducers/CoursesReducer';
import CommunityReducer from '../reducers/CommunityReducer';

// "root reducer"
export default combineReducers({
    discover: DiscoverReducer,
    header: HeaderReducer,
    courses: CoursesReducer,
    community: CommunityReducer,
    router: routerReducer
});
