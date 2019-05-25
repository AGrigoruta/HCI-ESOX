import React from 'react'

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header__wrapper">
                <div className="header__navigation">
                    <div className="header__branding">
                        <i className="header__icon fas fa-scroll"></i>
                        <span className="header__title">EsoX</span>
                    </div>
                    <div className="header__tabs">
                        {this.props.header.tabs.map((item => (
                            <div className="header__tab">
                                <span className={this.props.header.selectedTab === item ? 'tab__selected' : ''} key={item}>{item}</span>
                                {this.props.header.selectedTab === item ? (<div className="tab__underline"></div>) : ''}
                            </div>
                        )))}
                    </div>
                </div>
                <div className="header__user">
                    {this.props.header.loggedIn ? (
                        <div className="header__user-details">
                            <img className="header__user-image" src={this.props.header.user.img}></img>
                            <span className="header__user-name">{this.props.header.user.name}</span>
                        </div>
                    ) : (
                        <button className="esox__button header__login isCarrot">
                            <i className="fas fa-sign-in-alt"></i>
                            <span>Login</span>
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default HeaderComponent;
