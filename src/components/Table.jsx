import React from "react";

const Table = ({ emps }) => {
 
  return (
    <>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">Designation</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {emps.map((emp) => {
              return (
                <tr>
                  <th scope="row">{emp.id}</th>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.number}</td>
                  <td>{emp.designation}</td>
                  <td>
                    <i className="bi bi-pencil-square text-primary fs-5"></i>
                    <i className="bi bi-trash-fill text-danger fs-5 mx-2"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
