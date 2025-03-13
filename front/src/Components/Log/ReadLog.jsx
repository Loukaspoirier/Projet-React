import React, { useState } from "react";
import UpdateLog from "./UpdateLog";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "../General/Tools/Button/Button";

export default function ReadLog() { // This component is used to display the user's information
  const id = localStorage.getItem("id");
  const firstname = getFirstname();
  const lastname = getLastname();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function getFirstname() { // This function is used to get the user's first name from the email
    const email = localStorage.getItem("email");
    if (email) {
      let firstname = email.split(".")[0];
      firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1);
      return firstname;
    }
    return "";
  }

  function getLastname() { // This function is used to get the user's last name from the email
    const email = localStorage.getItem("email");
    if (email) {
      const emailParts = email.split(".");
      if (emailParts.length > 1) {
        let lastname = emailParts[1].split("@")[0];
        lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1);
        return lastname;
      }
    }
    return "";
  }

  return (
    <Row className="p-5">
      <div className="col-lg-3"></div>
      <div className="col-lg-6">
        <Form onSubmit={handleSubmit} className="rounded-4 border-hexa p-5">
          <Form.Group className="pb-3">
            <Form.Label className="color-text">Nom</Form.Label>
            <Form.Control placeholder={firstname} disabled />
          </Form.Group>
          <Form.Group className="pb-3">
            <Form.Label className="color-text">Prénom</Form.Label>
            <Form.Control placeholder={lastname} disabled />
          </Form.Group>
          <Form.Group className="pb-3">
            <Form.Label className="color-text">Email</Form.Label>
            <Form.Control
              placeholder={localStorage.getItem("email")}
              disabled
            />
          </Form.Group>
          <Form.Group className="pb-3">
            <Form.Label className="color-text">Role</Form.Label>
            <Form.Control
              placeholder={localStorage.getItem("roles")}
              disabled
            />
          </Form.Group>
          <div className="d-flex justify-content-center pt-2">
            <UpdateLog id={id} /> {/* Render the UpdateLog component with the id*/}
          </div>
          <div className="hidden">
            <Button type="submit" description="Submit" link="*" />
          </div>
        </Form>
      </div>
      <div className="col-lg-auto"></div>
    </Row>
  );
}
