import React from "react";

const Employee = ({ employee }) => (
  <li className="employee">
    <div className="employee-image">
      <img src={employee.imageUrl} />
      <screen></screen>
    </div>
    <ul className="employee-attributes">
      <li>{employee.name}</li>
      <li>{employee.job}</li>
    </ul>
  </li>
);

export default Employee;
