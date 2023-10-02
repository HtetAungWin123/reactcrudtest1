import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import pic from "./img/allergy.png";
import pic1 from "./img/picky eater.png";


const Table = ({ employees, handleEdit, handleDelete }) => {
  employees.forEach((employee, i) => {
    employee.id = i + 1;
  });

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null,
  });

  const iconMange = () => {
    if (employees.status === 1) {
      return <td><img src={pic1}/></td>;
    } else {
      return <td><img src={pic}/></td>;
    }
  };

  const MyComponent = ({ employees }) => (
    <td>
      {employees.status === 1 ? (
        "The value is either 1 or 0."
      ) : (
        "The value is neither 1 nor 0."
      )}
    </td>
  );

  return (
    

    <div className="contain-table">
      <table className="striped-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Pet Name</th>
            <th>Status</th>
            <th>Pawrent</th>
            <th>Breed</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Content Phone No</th>
            <th colSpan={2} className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((employee, i) => (
              <tr key={employee.id}>
                <td>{i + 1}</td>
                <td>{employee.firstName}</td>
                <td>{employee.status}</td>
                <td>{employee.email}</td>
                <td>{formatter.format(employee.salary)}</td>
                <td>{employee.date} </td>
                <td>{employee.lastName} </td>
                <td>{employee.date} </td>
                <td className="text-right">
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="button muted-button"
                  >
                    Edit
                  </button>
                </td>
                <td className="text-left">
                  <button
                    onClick={() => handleDelete(employee.id)}
                    className="button muted-button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>No Employees</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
