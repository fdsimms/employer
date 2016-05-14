import React from "react";
import EmployeeJobContainer from "../containers/employeeJobContainer";
import { connect } from "react-redux";

const Employee = ({ employee, dispatch }) => (
  <li className="employee">
    <div className="employee-image">
      <img src={employee.imageUrl} />
      <screen></screen>
    </div>
    <ul className="employee-attributes">
      <li className="employee-name">{employee.name}</li>
      <EmployeeJobContainer dispatch={dispatch} employeeId={employee.id} job={employee.job} />
    </ul>
  </li>
);

export default connect()(Employee);
