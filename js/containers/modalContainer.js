import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import Modal from "../components/modal";
import { toggleModal } from "../modalActions";

class ModalContainer extends Component {
  constructor(props) {
    super(props);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleCloseClick() {
    const { dispatch, employee } = this.props;
    dispatch(toggleModal(employee));
  }

  render() {
    const { isShowing, employee } = this.props;
    const shouldRender = isShowing && !!employee;
    const toRender = shouldRender ? (
      <Modal employee={employee}
             isShowing={isShowing}
             handleCloseClick={this.handleCloseClick}/>
           ) : <div></div>;
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
