import React from 'react';
import { List, Card, Image, Divider } from 'semantic-ui-react';
import { COURSES } from '../utils/COURSES';


class DiscoverComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    changeFilter = (item) => {
        this.props.changeFilter(item);
    }

    render() {
        const renderCourses = () => {
            return (
                COURSES.map((item) => {
                    return (
                        <Card>
                            <Card.Content>
                                <Image floated='left' className="discover__card-picture" src={item.picture} />
                                <Card.Header>{item.name}</Card.Header>
                                <Card.Description>{item.description}</Card.Description>
                            </Card.Content>
                        </Card>
                    )
                })
            )
        }
        return (
            <div className="discover__wrapper">
                <aside className="discover__sidebar">
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
                <section className="discover__main">
                    <Card.Group>
                        {renderCourses()}
                    </Card.Group>
                </section>
            </div>
        );
    }
}

export default DiscoverComponent;
