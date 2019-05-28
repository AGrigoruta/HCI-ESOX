import React from 'react';
import { List, Divider } from 'semantic-ui-react';
// import { COURSES } from '../utils/COURSES';


class CoursesComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCourseId: null
        }
        console.log(this.props)
    }

    componentDidMount() {
        this.props.changeTab('Courses');
        if (this.props.discover.selectedCourse) {
            this.setState({ selectedCourseId: this.props.discover.selectedCourse.id })
        }
    }

    render() {
        return (
            <div className="esox-content__wrapper">
                <aside className="esox__sidebar">
                    <Divider className="discover__filter_divider" horizontal>Current</Divider>
                    <List className="filter__list">
                        <List.Item className="discover__filter" key={JSON.stringify(this.props.discover.selectedCourse)}>
                            <div>{this.props.discover.selectedCourse ? this.props.discover.selectedCourse.name : ''}</div>
                            {this.props.discover.selectedCourse && this.props.discover.selectedCourse.id === this.state.selectedCourseId ? (<div className="filter__underline"></div>) : ''}
                        </List.Item>
                    </List>
                    <Divider className="discover__filter_divider" horizontal>Saved</Divider>
                    {/* <List className="filter__list">
                        <List.Item className="discover__filter" key={JSON.stringify(this.props.discover.selectedCourse)}>
                            <div>{this.props.discover.selectedCourse ? this.props.discover.selectedCourse.name : ''}</div>
                            {this.props.discover.selectedCourse && this.props.discover.selectedCourse.id === this.state.selectedCourseId ? (<div className="filter__underline"></div>) : ''}
                        </List.Item>
                    </List> */}
                </aside>
                <section className="esox__main">

                </section>
            </div>
        );
    }
}

export default CoursesComponent;
