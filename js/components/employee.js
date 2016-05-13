import React from "react";

const Employee = ({ employee }) => (
  <li className="employee">
    <img className="employee-image" src={employee.imageUrl} />
    <ul className="employee-attributes">
      <li>{employee.name}</li>
      <li>{employee.job}</li>
    </ul>
  </li>
);

export default Employee;
