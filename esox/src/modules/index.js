import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import DiscoverReducer from '../reducers/DiscoverReducer';
import HeaderReducer from '../reducers/HeaderReducer';

// "root reducer"
export default combineReducers({
    router: routerReducer,
    discover: DiscoverReducer,
    header: HeaderReducer
});
