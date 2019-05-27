import React from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Modal, Icon, Form, Popup, Dropdown } from 'semantic-ui-react'

const options = [
    { key: 'user', text: 'Account', icon: 'user', value: 'user' },
    { key: 'sign-out', text: 'Sign Out', icon: 'sign out', value: 'sign-out' },
]

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false,
            email: '',
            password: '',
            validEmail: true
        }
    }

    selectTab(item) {
        this.props.changeTab(item.name);
        this.props.history.push(item.path);
    }

    openModal = () => {
        this.setState({ modalOpen: true });
    }

    closeModal = () => {
        this.setState({ modalOpen: false });
    }

    validateEmail = (email) => {
        const re = /[a-z0-9\._%+!$&*=^|~#%'`?{}/\-]+@([a-z0-9\-]+\.){1,}([a-z]{2,16})/;
        return re.test(String(email).toLowerCase());
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handleEmailBlur = () => {
        this.setState({ validEmail: this.validateEmail(this.state.email)});
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    login = () => {
        this.props.login();
        this.setState({email: '', password: ''});
        this.closeModal();
    }

    handleDropdownChange = (e, value) => {
        if (value === 'user') {
            this.props.history.push('/user');
        } else if (value === 'sign-out') {
            this.props.logout()
            this.props.changeTab('Discover');
            this.props.history.push('/discover');
        }
    }

    render() {
        const { modalOpen } = this.state
        return (
            <div className="header__wrapper">
                <div className="header__navigation">
                    <div className="header__branding">
                        <i className="header__icon fas fa-scroll"></i>
                        <span className="header__title">EsoX</span>
                    </div>
                    <div className="header__tabs">
                        {this.props.header.tabs.map((item => (
                            <div className="header__tab" key={JSON.stringify(item)} onClick={() => this.selectTab(item)}>
                                <span className={this.props.header.selectedTab === item.name ? 'tab__selected' : ''} key={item.name}>{item.name}</span>
                                {this.props.header.selectedTab === item.name ? (<div className="tab__underline"></div>) : ''}
                            </div>
                        )))}
                    </div>
                </div>
                <div className="header__user">
                    {this.props.header.loggedIn ? (
                        <Dropdown className="header__user-dropdown" 
                            trigger={<div className="header__user-details">
                                        <div className="header__user-name"><span>{this.props.header.user.name.first.toUpperCase()}</span></div>
                                        <img className="header__user-image" src={this.props.header.user.picture.thumbnail}></img>
                                    </div>} 
                            options={options}
                            pointing='top right'
                            icon={null}
                            onChange={(e, {value}) => this.handleDropdownChange(e, value)}
                        />
                        
                    ) : (
                        <button className="esox__button header__login isCarrot" onClick={this.openModal}>
                            <i className="fas fa-sign-in-alt"></i>
                            <span>Login</span>
                        </button>
                    )}
                </div>
                <Modal size='tiny' open={modalOpen} onClose={this.closeModal}>
                    <Modal.Content>
                        <Button className="esox__login-button" color='google plus' onClick={this.login}>
                            <Icon name='google' />Login with Google
                        </Button>
                        <Button className="esox__login-button" color='facebook' onClick={this.login}>
                            <Icon name='facebook' /> Login with Facebook
                        </Button>
                        <Button className="esox__login-button button__github" onClick={this.login}>
                            <Icon name='github' /> Login with Github
                        </Button>
                    </Modal.Content>
                    <Modal.Actions>
                        <Form>
                            <div className="login-form__title">Not a social network fan? Use your own email:</div>
                            <Form.Group>
                                <Popup
                                    trigger={<Form.Input value={this.state.email} className={this.state.validEmail === false ? 'error' : ''} iconPosition='left' placeholder='Email' type="email" onChange={this.handleEmailChange} onBlur={this.handleEmailBlur}>
                                        <Icon name='at' />
                                        <input />
                                    </Form.Input>}
                                    content='I have been informed that this email address is invalid. It should look something like esox@hci.com'
                                    disabled={this.state.validEmail}
                                    inverted
                                />
                                <Form.Input iconPosition='left' placeholder='Password' type="password" onChange={this.handlePasswordChange}>
                                    <Icon name='eye' />
                                    <input />
                                </Form.Input>
                                <Button onClick={this.login} positive icon='arrow right' />
                            </Form.Group>
                        </Form>
                    </Modal.Actions>
                </Modal>
            </div>
        );
    }
}

export default withRouter(HeaderComponent);
