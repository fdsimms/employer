import React from "react";

const Modal = ({ employee, isShowing }) => (
  isShowing ? (
    <div className="modal">
      <div className="modal-screen"></div>
      <div className="modal-main">
        <div className="modal-image">
          <img src={employee.imageUrl} />
        </div>
        <p className="modal-blurb">{employee.name} is a really important part of our team. We
        think {employee.name} is a {employee.job}, but to be honest we
        aren't positive what that means.
        </p>
      </div>
    </div>
  ) : null
);

export default Modal;
