import React, { Component, PropTypes } from "react";
import { ItemTypes } from '../dndConstants';
import { DragSource } from 'react-dnd';
import { connect } from "react-redux";


const employeeJobSource = {
  beginDrag(props) {
    return { job: props.job, employeeId: props.employeeId };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class EmployeeJob extends Component {
  render() {
    const { connectDragSource, isDragging, job } = this.props;
    let classes = "employee-job";
    if (isDragging) {
      classes += " " + "dragging";
    }
    return connectDragSource(
      <li className={classes}>{ job }</li>
    );
  }
}

EmployeeJob.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  job: PropTypes.string.isRequired,
  employeeId: PropTypes.number.isRequired
};

export default DragSource(ItemTypes.EMPLOYEE_JOB, employeeJobSource, collect)(EmployeeJob);
