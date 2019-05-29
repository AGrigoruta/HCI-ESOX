import React from 'react';
import { List, Divider, Button, Card, Input } from 'semantic-ui-react';
import Image from './Image';
import {GUILDS} from '../utils/GUILDS';

class CommunityComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allGuilds: Object.assign([], GUILDS),
            filteredGuilds: Object.assign([], GUILDS),
            selectedGuild: null,
            searchWord: ''
        }
    }

    componentWillMount() {
        this.props.changeTab('Community');
    }

    componentDidMount() {
        let newGuilds;
        if (this.props.community.savedGuild) {
            const copyOfGuilds = Object.assign([], GUILDS);
            newGuilds = copyOfGuilds.filter(item => item.id !== this.props.community.savedGuild.id);
        } else {
            newGuilds = Object.assign([], GUILDS);
        }
        this.setState({allGuilds: newGuilds, filteredGuilds: newGuilds, selectedGuild: newGuilds[0]})
        this.props.getFriends(this.state.allGuilds[0].friendNumber);
        this.props.getMembers(this.state.allGuilds[0].memberNumber);
    }

    guildIsSaved = () => {
        if (this.props.community.savedGuild && this.state.selectedGuild && this.props.community.savedGuild.id === this.state.selectedGuild.id) {
            return true;
        }
        return false;
    }

    addGuild = () => {
        if (!this.guildIsSaved()) {
            this.props.saveGuild(this.state.selectedGuild);
            const copyOfGuilds = Object.assign([], GUILDS);
            const newGuilds = copyOfGuilds.filter(item => item.id !== this.state.selectedGuild.id);
            let newFiltered
            if (this.state.filteredGuilds.includes(this.state.selectedGuild)) {
                newFiltered = this.state.filteredGuilds.filter((item => item.id !== this.state.selectedGuild.id));
            } else {
                newFiltered = Object.assign([], this.state.filteredGuilds);
            }
            this.setState({ allGuilds: newGuilds, filteredGuilds: newFiltered });
        }
    }

    removeGuild = () => {
        if (this.guildIsSaved()) {
            this.props.saveGuild(null);
            const newFiltered = GUILDS.filter(item => item.name.includes(this.state.searchWord));
            this.setState({ allGuilds: Object.assign([], GUILDS), filteredGuilds: newFiltered})
        }
    }

    changeSelected = (item) => {
        if (!item.friends) {
            this.props.getFriends(item.friendsNumber);
        }
        if (!item.members) {
            this.props.getMembers(item.membersNumber);
        }
        this.setState({ selectedGuild: item });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.community.friends && this.state.allGuilds) {
            const idx = this.state.allGuilds.indexOf(this.state.selectedGuild);
            const newData = Object.assign([], this.state.allGuilds);
            newData[idx].friends = nextProps.community.friends;
            this.setState({ allGuilds: newData, selectedGuild: newData[idx] });
            this.props.sendFriends(null);
        } else if (nextProps.community.members && this.state.allGuilds) {
            const idx = this.state.allGuilds.indexOf(this.state.selectedGuild);
            const newData = Object.assign([], this.state.allGuilds);
            newData[idx].members = nextProps.community.members;
            this.setState({ allGuilds: newData, selectedGuild: newData[idx] });
            this.props.sendMembers(null);
        }
    }

    selectCompetition = (item) => {
        console.log(item);
    }

    handleSearchChange = (e) => {
        const newFiltered = this.state.allGuilds.filter(item => item.name.includes(e.target.value));
        this.setState({filteredGuilds: newFiltered, searchWord: e.target.value});
    }

    render() {
        return (
            <div className="esox-content__wrapper">
                <aside className="esox__sidebar">
                    <div className="guild__search_container">
                        <Input className="guild__search" icon='search' placeholder='Search...' onChange={this.handleSearchChange}/>
                    </div>
                    <Divider className="discover__filter_divider" horizontal>Your guild</Divider>
                    <List className="filter__list">
                        <List.Item className="discover__filter" key={JSON.stringify(this.props.community.savedGuild)}>
                            <div onClick={() => this.changeSelected(this.props.community.savedGuild)}>{this.props.community.savedGuild ? this.props.community.savedGuild.name : ''}</div>
                            {this.props.community.savedGuild && this.state.selectedGuild && this.props.community.savedGuild.id === this.state.selectedGuild.id ? (<div className="filter__underline"></div>) : ''}
                        </List.Item>
                    </List>
                    <Divider className="discover__filter_divider" horizontal>All guilds</Divider>
                    <List className="filter__list">
                        {this.state.filteredGuilds.map((item) => (
                            <List.Item className="discover__filter" key={JSON.stringify(item)}>
                                <div onClick={() => this.changeSelected(item)}>{item.name}</div>
                                {this.state.selectedGuild && item.id === this.state.selectedGuild.id ? (<div className="filter__underline"></div>) : ''}
                        </List.Item>))}
                    </List>
                </aside>
                <section className="esox__main">
                    <div className="course__content">
                        <div className="course__header">
                            <div className="course__presentation">
                                <img src={this.state.selectedGuild ? this.state.selectedGuild.picture : ''} alt="course thumbnail" className="course__thumbnail"></img>
                                <div className="course__title">{this.state.selectedGuild ? this.state.selectedGuild.name : ''}</div>
                            </div>
                        </div>
                        <div className="course__actions">
                            {this.props.header.loggedIn ? (
                                <div className="course__actions_content">
                                    <div className="course__action_button">
                                        {this.guildIsSaved() ? <Button circular icon='times' color='grey' onClick={this.removeGuild} /> : <Button circular icon='plus' color='blue' onClick={this.addGuild} />}
                                        <div className="course__action_info">{this.guildIsSaved() ? 'Exit this guild' : 'Enter this guild'}</div>
                                    </div>
                                </div>
                            ) : (
                                    <div className="course__action-loggedOut">Please log in to interact with guilds</div>
                            )}
                        </div>
                        <div className="friends__divider"></div>
                        <div className="guild__friends_wrapper">
                            {this.props.header.loggedIn ? (
                                <div className="guild__friends">
                                    <div className="course__friends_title">Friends in this guild:</div>
                                    <div className="course__friends_wrapper">
                                        {this.state.selectedGuild && this.state.selectedGuild.friends ?
                                            this.state.selectedGuild.friends.map((item) => <img key={JSON.stringify(item)} className="header__user-image friends__thumbnail" src={item.picture.medium} alt="friend thumbnail" title={`${item.name.first} ${item.name.last}`}></img>) : ''}
                                    </div>
                                </div>                                
                            ) : (
                                <div className="guild__friends-loggedOut">Please log in to see your friends from this guild</div>
                            )}
                            <div className="guild__friends_divider"></div>
                            <div className="guild__members">
                                <div className="course__friends_title">Guild members:</div>
                                <div className="course__friends_wrapper">
                                    {this.state.selectedGuild && this.state.selectedGuild.members ?
                                        this.state.selectedGuild.members.map((item) => <img key={JSON.stringify(item)} className="header__user-image friends__thumbnail" src={item.picture.medium} alt="member thumbnail" title={`${item.name.first} ${item.name.last}`}></img>) : ''}
                                </div>
                            </div>
                        </div>
                        <div className="friends__divider"></div>
                        <div className="course__questions">
                            {this.state.selectedGuild && this.state.selectedGuild.activeCompetitions.length > 0 ? (
                                <Card.Group>
                                    {this.state.selectedGuild.activeCompetitions.map(item => (
                                        <Card key={JSON.stringify(item)} onClick={() => this.selectCompetition(item)}>
                                            <Card.Content>
                                                <Card.Header>{item.title}</Card.Header>
                                                <Card.Description>{item.description}</Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <List bulleted>
                                                    {item.tasks.map(task => (
                                                        <List.Item key={task}>{task}</List.Item>
                                                    ))}
                                                </List>
                                            </Card.Content>
                                        </Card>
                                    ))}
                                </Card.Group>) : (
                                    <div className="course__questions-none">
                                        There are no active competitions in this guild
                            </div>)}
                        </div>
                    </div>
                </section>
                <aside className="esox__sidebar right">
                    <Card.Group>
                        {this.state.selectedGuild ? (
                            this.state.selectedGuild.achievements.map(item => (
                                <Card key={JSON.stringify(item)} className="achievement__card" fluid color={!this.props.header.loggedIn || item.locked ? 'red' : 'green'}>
                                    <div className="achievement__card_image">
                                        {this.props.header.loggedIn === false ? <Image imageIsRelative={false} imageSource='/lock.png' /> : <Image imageIsRelative={false} imageSource={item.locked ? '/lock.png' : item.picture} />}
                                    </div>
                                    <div className="achievement__card_description">
                                        {item.name}
                                    </div>
                                </Card>
                            ))
                        ) : ''}
                    </Card.Group>
                </aside>
            </div>
        );
    }
}

export default CommunityComponent;
