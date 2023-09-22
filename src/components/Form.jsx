import React from "react";

const Form = () => {
  return (
    <>
      <div className="container my-3">
        <div className="form">
          <div className="row">
            <div className="col-md-6">
              <div className="inputField">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="inputField">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" />
              </div>
            </div>
          </div>
          <div className="inputField">
            <label htmlFor="mobile">Mobile No.</label>
            <input type="tel" className="form-control" />
          </div>
          <div className="inputField">
            <label htmlFor="designation">Designation</label>
            <input type="text" className="form-control" />
          </div>
          <div className="button my-2">
            <button className="btn btn-primary w-100">Add Employee</button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Form;
