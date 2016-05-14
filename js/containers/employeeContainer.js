import React, { Component, PropTypes } from "react";
import Employee from "../components/employee";
import { connect } from "react-redux";
import { toggleModal } from "../modalActions";

class EmployeeContainer extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { dispatch, employee } = this.props;
    dispatch(toggleModal(employee));
  }

  render() {
    const { employee, dispatch } = this.props;
    const toRender = (
      <Employee handleClick={this.handleClick}
      dispatch={dispatch}
      employee={employee} />
    );

    return !employee ? null : toRender;
  }
}

EmployeeContainer.propTypes = {
  employee: PropTypes.object
};

export default connect()(EmployeeContainer);
