import React from "react";
import EmployeeJobContainer from "../containers/employeeJobContainer";

const Employee = ({ employee }) => (
  <li className="employee">
    <div className="employee-image">
      <img src={employee.imageUrl} />
      <screen></screen>
    </div>
    <ul className="employee-attributes">
      <li className="employee-name">{employee.name}</li>
      <EmployeeJobContainer job={employee.job} />
    </ul>
  </li>
);

export default Employee;
