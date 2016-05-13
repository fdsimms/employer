import React from "react";
import Employee from "./employee";

const EmployeesIndex = ({ employees }) => (
  <ul className="employees group">
    {employees.map((employee, i) =>
      <Employee key={i} employee={employee} />
    )}
  </ul>
);

export default EmployeesIndex;
