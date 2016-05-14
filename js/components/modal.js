import React from "react";

const Modal = ({ employee, isShowing }) => (
  isShowing ? (
    <div className="modal">
      <div className="modal-screen"></div>
      <div className="modal-main"></div>
    </div>
  ) : null
);

export default Modal;
