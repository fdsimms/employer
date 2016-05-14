import React, { Component, PropTypes } from "react";
import EmployeeJob from "../components/employeeJob";
import { ItemTypes } from "../dndConstants";
import { DropTarget } from "react-dnd";
import { changeEmployeeJob } from "../employeeActions";
import { connect } from "react-redux";
import { compose } from "redux";

const employeeJobTarget = {
  drop(props, monitor) {
    const { dispatch, employeeId, job } = props;
    const fromObject = monitor.getItem();
    dispatch(changeEmployeeJob(fromObject.employeeId, job));
    dispatch(changeEmployeeJob(employeeId, fromObject.job));
  },

  canDrop(props, monitor) {
    const fromObject = monitor.getItem();
    return (fromObject.employee !== props.employeeId &&
            fromObject.job !== props.job);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class EmployeeJobContainer extends Component {
  render() {
    const { connectDropTarget, isOver, job, canDrop, employeeId } = this.props;
    let classes = "employee-job-container";
    if (isOver && canDrop) {
      classes += " " + "is-over";
    } else if (canDrop) {
      classes += " " + "can-drop";
    }

    return connectDropTarget(
      <div className={classes}>
        <EmployeeJob employeeId={employeeId} job={job}/>
      </div>
    );
  }
}

EmployeeJobContainer.propTypes = {
  job: PropTypes.string.isRequired,
  employeeId: PropTypes.number.isRequired,
  isOver: PropTypes.bool.isRequired,
  canDrop: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.EMPLOYEE_JOB, employeeJobTarget, collect)(EmployeeJobContainer);
