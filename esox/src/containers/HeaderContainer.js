import { connect } from 'react-redux';
import {
    changeTab,
    login,
    logout
} from '../actions/HeaderActions'
import HeaderComponent from '../components/Header';

const mapStateProps = state => ({
    header: Object.assign({}, state.header)
});

const mapDispatchToProps = dispatch => ({
    changeTab: (tab) => {
        dispatch(changeTab(tab));
    },
    login: () => {
        dispatch(login());
    },
    logout: () => {
        dispatch(logout());
    }
});

const Header = connect(
    mapStateProps,
    mapDispatchToProps
)(HeaderComponent);

export default Header;
