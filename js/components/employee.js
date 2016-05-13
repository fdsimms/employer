import React from "react";
import EmployeeJob from "./employeeJob";

const Employee = ({ employee }) => (
  <li className="employee">
    <div className="employee-image">
      <img src={employee.imageUrl} />
      <screen></screen>
    </div>
    <ul className="employee-attributes">
      <li className="employee-name">{employee.name}</li>
      <EmployeeJob job={employee.job} />
    </ul>
  </li>
);

export default Employee;
