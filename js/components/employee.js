import React from "react";

const Employee = ({ employee }) => (
  <li className="employee">
    <div className="employee-image">
      <img src={employee.imageUrl} />
      <screen></screen>
    </div>
    <ul className="employee-attributes">
      <li className="employee-name">{employee.name}</li>
      <li className="employee-job">{employee.job}</li>
    </ul>
  </li>
);

export default Employee;
