import React from 'react';
import { List, Divider, Button, Card } from 'semantic-ui-react';
import Image from './Image';

class CoursesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: null,
            emptyPage: false
        }
    }

    componentWillMount() {
        this.props.changeTab('Courses');
        if (this.props.discover.selectedCourse) {
            this.setState({ selectedCourse: this.props.discover.selectedCourse })
        } else if (this.props.courses.savedCourses.length > 0) {
            this.setState({ selectedCourse: this.props.courses.savedCourses[0] })
        }
        if (this.props.discover.selectedCourse === null && this.props.courses.savedCourses.length === 0) {
            this.setState({ emptyPage: true });
        }
    }

    componentDidMount() {
        if (this.props.discover.selectedCourse) {
            this.props.getFriends(this.props.discover.selectedCourse.friendsNumber);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.discover.currentFriends.length > 0) {
            const newSelectedCourse = Object.assign({}, this.props.discover.selectedCourse);
            newSelectedCourse.friends = nextProps.discover.currentFriends;
            this.props.selectCourse(newSelectedCourse);
            this.setState({selectedCourse: newSelectedCourse});
            this.props.sendFriends([]);
        }
    }

    courseIsSaved = () => {
        const foundCourse = this.props.courses.savedCourses.find((item) => item.id === this.state.selectedCourse.id);
        if (foundCourse) {
            return true;
        }
        return false;
    }

    addCourse = () => {
        if (!this.courseIsSaved()) {
            const copyOfSavedCourses = Object.assign([], this.props.courses.savedCourses);
            copyOfSavedCourses.push(this.props.discover.selectedCourse)
            this.props.saveCourse(copyOfSavedCourses);
            this.props.selectCourse(null);
        }
    }

    removeCourse = () => {
        if (this.courseIsSaved()) {
            let copyOfSavedCourses = Object.assign([], this.props.courses.savedCourses);
            const foundCourse = this.props.courses.savedCourses.find((item) => item.id === this.state.selectedCourse.id);
            const idx = this.props.courses.savedCourses.indexOf(foundCourse);
            copyOfSavedCourses.splice(idx, 1);
            this.props.saveCourse(copyOfSavedCourses);
        }
    }

    changeSelected = (item) => {
        this.setState({selectedCourse: item});
    }

    selectQuestion = (item) => {
        console.log(item);
    }

    render() {
        return (
            <div className="esox-content__wrapper">
                <aside className="esox__sidebar">
                    <Divider className="discover__filter_divider" horizontal>Current</Divider>
                    <List className="filter__list">
                        <List.Item className="discover__filter" key={JSON.stringify(this.props.discover.selectedCourse)}>
                            <div onClick={() => this.changeSelected(this.props.discover.selectedCourse)}>{this.props.discover.selectedCourse ? this.props.discover.selectedCourse.name : ''}</div>
                            {this.props.discover.selectedCourse && this.state.selectedCourse && this.props.discover.selectedCourse.id === this.state.selectedCourse.id ? (<div className="filter__underline"></div>) : ''}
                        </List.Item>
                    </List>
                    <Divider className="discover__filter_divider" horizontal>Saved</Divider>
                    <List className="filter__list">
                        {this.props.courses.savedCourses.map((item) => (
                            <List.Item className="discover__filter" key={JSON.stringify(item)}>
                                <div onClick={() => this.changeSelected(item)}>{item.name}</div>
                                {this.state.selectedCourse && item.id === this.state.selectedCourse.id ? (<div className="filter__underline"></div>) : ''}
                            </List.Item>))}
                    </List>
                </aside>
                <section className="esox__main">
                    {this.state.emptyPage ? (
                        <div className="courses__empty-message">Please go to the Discover tab and select a course</div>
                    ) : (
                        <div className="course__content">
                            <div className="course__header">
                                <div className="course__presentation">
                                    <img src={this.state.selectedCourse ? this.state.selectedCourse.picture : ''} alt="course thumbnail" className="course__thumbnail"></img>
                                    <div className="course__title">{this.state.selectedCourse ? this.state.selectedCourse.name : ''}</div>
                                </div>
                                <div>
                                    {this.courseIsSaved() ? (
                                        <div className="course__action_play">
                                            <Button circular icon='play' color='green' />
                                            <div className="course__action_play-title">{`${this.state.selectedCourse ? this.state.selectedCourse.hoursInvested : ''} hours invested`}</div>
                                        </div>
                                    ) : ''}
                                </div>
                            </div>
                            <div className="course__actions">
                                {this.props.header.loggedIn ? (
                                    <div className="course__actions_content">
                                        <div className="course__action_button">
                                            {this.courseIsSaved() ? <Button circular icon='times' color='grey' onClick={this.removeCourse}/> : <Button circular icon='plus' color='blue' onClick={this.addCourse}/>}
                                            <div className="course__action_info">{this.courseIsSaved() ? 'Remove this course' : 'Add this course'}</div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="course__action-loggedOut">Please log in to start this course</div>
                                )}
                            </div>
                            <div className="friends__divider"></div>
                                {this.props.header.loggedIn ? (
                                    <div className="course__friends">
                                        <div className="course__friends_title">Friends who follow this course:</div>
                                        <div className="course__friends_wrapper">
                                            {this.state.selectedCourse && this.state.selectedCourse.friends ?
                                                this.state.selectedCourse.friends.map((item) => <img key={JSON.stringify(item)} className="header__user-image friends__thumbnail" src={item.picture.medium} alt="friend thumbnail" title={`${item.name.first} ${item.name.last}`}></img>) : ''}
                                        </div>
                                    </div>
                                ) : (
                                        <div className="course__friends-loggedOut">Please log in to see your friends who take this course</div>
                                )}
                            <div className="friends__divider"></div>
                            <div className="course__questions">
                                {this.state.selectedCourse && this.state.selectedCourse.activeQuestions.length > 0 ? (
                                    <Card.Group>
                                        {this.state.selectedCourse.activeQuestions.map(item => (
                                            <Card key={JSON.stringify(item)} onClick={() => this.selectQuestion(item)}>
                                                <Card.Content>
                                                    <Card.Header>{item.title}</Card.Header>
                                                    <Card.Description>{item.description}</Card.Description>
                                                </Card.Content>
                                            </Card>
                                        ))}
                                    </Card.Group>) : (
                                    <div className="course__questions-none">
                                        There are no active questions for this course!
                                    </div>)}
                            </div>
                        </div>
                    )}
                </section>
                <aside className="esox__sidebar right">
                    <Card.Group>
                        {this.state.selectedCourse ? (
                            this.state.selectedCourse.achievements.map(item => (
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

export default CoursesComponent;
