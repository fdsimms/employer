import React, { Component, PropTypes } from "react";
import EmployeeJob from "../components/employeeJob";
import { ItemTypes } from "../dndConstants";
import { DropTarget } from "react-dnd";
import { changeEmployeeJob } from "../actions";
import { connect } from "react-redux";
import { compose } from "redux";

const employeeJobTarget = {
  drop(props, monitor) {
    const { dispatch, employeeId, job } = props;
    const fromObject = monitor.getItem();
    dispatch(changeEmployeeJob(fromObject.employeeId, job));
    dispatch(changeEmployeeJob(employeeId, fromObject.job));
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class EmployeeJobContainer extends Component {
  componentWillReceiveProps() {
    this.forceUpdate();
  }

  render() {
    const { connectDropTarget, isOver, job, employeeId } = this.props;
    let classes = "employee-job-container";
    if (isOver) {
      classes += " " + "is-over";
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
  isOver: PropTypes.bool.isRequired
};

export default DropTarget(ItemTypes.EMPLOYEE_JOB, employeeJobTarget, collect)(EmployeeJobContainer);
