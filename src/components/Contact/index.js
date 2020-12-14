import React, { useState, useEffect } from "react";
import ContactForm from "../ContactForm";
import fireDB from "../../firebase";

// import { Container } from './styles';

function Contact() {
  const [contacts, setContacts] = useState({});

  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    fireDB.child("contacts").on("value", (snapshot) => {
      const values = snapshot.val();
      if (values != null) {
        setContacts(values);
      }
    });
  }, []);

  function addOrEdit(values) {
    if (currentId) {
      fireDB.child(`contacts/${currentId}`).set(values, (error) => {
        if (error) {
          return console.error(error);
        }

        setCurrentId("");
      });
    } else {
      fireDB.child("contacts").push(values, (error) => {
        if (error) {
          console.error(error);
        }
      });
    }
  }
  function onDelete(id) {
    if (window.confirm("Are you sure to delete this record?")) {
      fireDB.child(`contacts/${id}`).remove((error) => {
        if (error) {
          return console.error(error);
        }
      });
    }
  }

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Register</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm {...{ addOrEdit, currentId, contacts }} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contacts).map((id) => (
                <tr key={id}>
                  <td>{contacts[id].fullName}</td>
                  <td>{contacts[id].mobile}</td>
                  <td>{contacts[id].email}</td>
                  <td>
                    <i
                      className="fas fa-pencil-alt btn text-primary"
                      onClick={() => setCurrentId(id)}
                    ></i>
                    <i
                      className="fas fa-trash-alt btn text-danger"
                      onClick={() => {
                        onDelete(id);
                      }}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Contact;
