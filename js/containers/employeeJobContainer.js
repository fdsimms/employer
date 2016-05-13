import React, { Component, PropTypes } from 'react';
import EmployeeJob from '../components/employeeJob';
import { ItemTypes } from '../dndConstants';
import { DropTarget } from 'react-dnd';

const employeeJobTarget = {
  drop(props) {
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class EmployeeJobContainer extends Component {
  render() {
    const { connectDropTarget, isOver, job } = this.props;
    let classes = "employee-job-container";
    if (isOver) {
      classes += " " + "is-over";
    }
    return connectDropTarget(
      <div className={classes}>
        <EmployeeJob job={job} />
      </div>
    );
  }
}

EmployeeJobContainer.propTypes = {
  job: PropTypes.string.isRequired,
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.EMPLOYEE_JOB, employeeJobTarget, collect)(EmployeeJobContainer);
