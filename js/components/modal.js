import React from "react";

const show = (
  <div>Showing</div>
);

const hide = (
  <div>Hidden</div>
);

const Modal = ({ name, isShowing }) => (
  isShowing ? show : hide
);

export default Modal;
