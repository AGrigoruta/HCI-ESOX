import { connect } from 'react-redux';
import HeaderComponent from '../components/Header';

const mapStateProps = state => ({
    header: Object.assign({}, state.header)
});

const mapDispatchToProps = dispatch => ({

});

const Header = connect(
    mapStateProps,
    mapDispatchToProps
)(HeaderComponent);

export default Header;
