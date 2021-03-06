import React, { Component } from 'react';
import './classesTeachingComponent.css';
import axios from 'axios';
import moment from 'moment';

export default class ClassesTeachingComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            classes: []
        }
    }

    componentDidMount() {
        axios.post('/api/classes', this.props.aClassesTeaching).then(classesData => {
            this.setState({ ...this.state, classes: classesData.data });
        }).catch(err => { console.log(err) });
    }

    render() {
        return (
            <div className="classesTeachingComponent">
                <table className="centered">
                    <thead>
                        <tr>
                            <th>Class Name:</th>
                            <th>Location:</th>
                            <th>Time:</th>
                            <th>Date:</th>
                            <th>Seats Available</th>
                        </tr>
                    </thead>
                    <tbody>

                        {this.state.classes.map(classData => {
                            return (
                                <tr>
                                    <td>{classData.name}</td>
                                    <td>{classData.location}</td>
                                    <td>{classData.startTime} - {classData.endTime}</td>
                                    <td>{moment(classData.startDate).format('MMMM Do YYYY')} - {moment(classData.endDate).format('MMMM Do YYYY')}</td>
                                    <td>{classData.seatsAvailable}</td>
                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        );
    }
}
