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
  employee: PropTypes.object
};

function mapStateToProps(state) {
  const { isShowing, employee } = state.modal;

  return {
    isShowing,
    employee
  };
}

export default connect(mapStateToProps)(ModalContainer);
