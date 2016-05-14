import React from "react";

const Modal = ({ employee, isShowing }) => (
  isShowing ? (
    <div className="modal">
      <div className="modal-main">
        <div className="modal-image">
          <img src={employee.imageUrl} />
        </div>
        <p className="modal-blurb">{employee.name} is a really important part of our team. We
        think {employee.name} is one of our {employee.job}s, but to be honest this
        could be the CEO for all we know.
        </p>
      </div>
    </div>
  ) : null
);

export default Modal;
