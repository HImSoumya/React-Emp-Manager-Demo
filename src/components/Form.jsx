import React, { useState } from "react";

const initialState = {
  name: "",
  email: "",
  number: "",
  designation: "",
};

const Form = ({ handleAdd }) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    // console.log(e);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(formData);
    handleAdd(formData);
    setFormData(initialState);
  };
  return (
    <>
      <div className="container my-3">
        <div className="form">
          <div className="row">
            <div className="col-md-6">
              <div className="inputField">
                <label htmlFor="name">Name</label>
                <input
                  value={formData.name}
                  onChange={handleChange}
                  name="name"
                  type="text"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="inputField">
                <label htmlFor="email">Email</label>
                <input
                  value={formData.email}
                  onChange={handleChange}
                  name="email"
                  type="email"
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="inputField">
            <label htmlFor="mobile">Mobile No.</label>
            <input
              value={formData.number}
              onChange={handleChange}
              name="number"
              type="tel"
              className="form-control"
            />
          </div>
          <div className="inputField">
            <label htmlFor="designation">Designation</label>
            <input
              value={formData.designation}
              onChange={handleChange}
              name="designation"
              type="text"
              className="form-control"
            />
          </div>
          <div className="button my-2">
            <button onClick={handleSubmit} className="btn btn-primary w-100">
              Add Employee
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Form;
