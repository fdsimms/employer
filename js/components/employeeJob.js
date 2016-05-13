import React, { Component, PropTypes } from "react";
import { ItemTypes } from '../dndConstants';
import { DragSource } from 'react-dnd';

const employeeJobSource = {
  beginDrag(props) {
    return { job: props.job };
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
    return connectDragSource(
      <li className="employee-job">{ job }</li>
    );
  }
}

EmployeeJob.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  job: PropTypes.string.isRequired
};

export default DragSource(ItemTypes.EMPLOYEE_JOB, employeeJobSource, collect)(EmployeeJob);
