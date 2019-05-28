import React from 'react';
import { List, Card, Image, Divider } from 'semantic-ui-react';
import { COURSES } from '../utils/COURSES';


class DiscoverComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: Object.assign([], COURSES),
        }
    }

    componentDidMount() {
        this.props.changeTab('Discover');
        this.changeFilter(this.props.discover.selectedFilter);
    }

    changeFilter = (item) => {
        this.props.changeFilter(item);
        let newData = Object.assign([], COURSES);
        if (item === 'Minimalistic' || item === 'Colors' || item === 'Fun') {
            newData = COURSES.filter(card => card.category === item);
        } else if (item === 'Beginner' || item === 'Intermediate' || item === 'Advanced') {
            newData = COURSES.filter(card => card.difficulty === item);
        }
        this.setState({data: newData});
    }

    selectCourse = (item) => {
        this.props.selectCourse(item);
        this.props.changeTab('Courses');
        this.props.history.push('/courses');
    }

    render() {
        const renderCourses = (data) => {
            return (
                data.map((item) => {
                    return (
                        <Card key={JSON.stringify(item)} onClick={() => this.selectCourse(item)}>
                            <Card.Content>
                                <Image floated='left' className="discover__card-picture" src={item.picture} />
                                <Card.Header>{item.name}</Card.Header>
                                <Card.Description>{item.description}</Card.Description>
                                {this.props.header.loggedIn ? (<div className="progress-container">
                                    <div style={{width: `${item.progress}%`}} className="step"></div>
                                </div>) : ''}
                            </Card.Content>
                        </Card>
                    )
                })
            )
        }
        return (
            <div className="esox-content__wrapper">
                <aside className="esox__sidebar">
                    <List className="filter__list">
                        <List.Item className="discover__filter" key={JSON.stringify(this.props.discover.allFilters[0])}>
                            <div onClick={() => this.changeFilter(this.props.discover.allFilters[0])}>{this.props.discover.allFilters[0]}</div>
                            {this.props.discover.selectedFilter === this.props.discover.allFilters[0] ? (<div className="filter__underline"></div>) : ''}
                        </List.Item>
                    </List>
                    <Divider className="discover__filter_divider" horizontal>Category</Divider>
                    <List className="filter__list">
                        {this.props.discover.allFilters.slice(1, 4).map((item) => (
                            <List.Item className="discover__filter" key={JSON.stringify(item)}>
                                <div onClick={() => this.changeFilter(item)}>{item}</div>
                                {this.props.discover.selectedFilter === item ? (<div className="filter__underline"></div>) : ''}
                            </List.Item>))}
                    </List>
                    <Divider className="discover__filter_divider" horizontal>Difficulty</Divider>
                    <List className="filter__list">
                        {this.props.discover.allFilters.slice(4).map((item) => (
                            <List.Item className="discover__filter" key={JSON.stringify(item)}>
                                <div onClick={() => this.changeFilter(item)}>{item}</div>
                                {this.props.discover.selectedFilter === item ? (<div className="filter__underline"></div>) : ''}
                            </List.Item>))}
                    </List>
                </aside>
                <section className="esox__main">
                    <Card.Group>
                        {renderCourses(this.state.data)}
                    </Card.Group>
                </section>
            </div>
        );
    }
}

export default DiscoverComponent;
