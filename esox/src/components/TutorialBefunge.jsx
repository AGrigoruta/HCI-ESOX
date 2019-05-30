import React from 'react';
import { List, Divider} from 'semantic-ui-react';
class TutorialBefunge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourse: null,
            emptyPage: false
        }
    }

    componentWillMount() {
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

    changeSelected = (item) => {
        this.setState({selectedCourse: item});
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
                <main className="tutorial__frame">
                    <iframe className="frame" src="befunge/index.html" title="Befunge tutorial"></iframe>
                </main>
            </div>
        );
    }
}

export default TutorialBefunge;
