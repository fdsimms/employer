import React from "react";
import EmployeeContainer from "../containers/employeeContainer";

const EmployeesIndex = ({ employees }) => (
  <ul className="employees group">
    {employees.map((employee, i) =>
      <EmployeeContainer key={i} employee={employee} />
    )}
  </ul>
);

export default EmployeesIndex;
