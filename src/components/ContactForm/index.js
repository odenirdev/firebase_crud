import React, { useState, useEffect } from "react";

// import { Container } from './styles';

function ContactForm({ addOrEdit, currentId, contacts }) {
  const initalValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };

  useEffect(() => {
    const initalValues = {
      fullName: "",
      mobile: "",
      email: "",
      address: "",
    };

    if (currentId === "") setValues({ ...initalValues });
    else setValues(contacts[currentId]);
  }, [currentId, contacts]);

  const [values, setValues] = useState(initalValues);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    addOrEdit(values);
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          name="fullName"
          value={values.fullName}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Mobile"
            name="mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="E-mail"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="form-group">
        <textarea
          className="form-control"
          placeholder="Address"
          name="address"
          value={values.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={currentId ? "Update" : "Save"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
}

export default ContactForm;
