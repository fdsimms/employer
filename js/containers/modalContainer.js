import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Modal from "../components/modal";

class ModalContainer extends Component {
  render() {
    const { isShowing, employee } = this.props;
    const shouldRender = isShowing && !!employee;
    const toRender = shouldRender ? (<Modal employee={employee.name}
                            isShowing={isShowing} />) : <div></div>;
    return toRender;
  }
}

ModalContainer.propTypes = {
  employeeId: PropTypes.number
};

function mapStateToProps(state) {
  const { items } = state.employees;
  const { isShowing, modalEmployeeId } = state.modal;
  const employee = items[modalEmployeeId];

  return {
    isShowing,
    employee
  };
}

export default connect(mapStateToProps)(ModalContainer);
