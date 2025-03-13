import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "../../General/Tools/Button/Button";
import DisabledButton from "../../General/Tools/Button/DisableButton";
import { useNavigate } from "react-router-dom";
import "../../../index.css";

export default function SignupForm(props) { // This component is used to sign up
  const navigate = useNavigate();

  useEffect(() => { // This effect is used to check if the user is already logged in
    if (localStorage.getItem("id")) {
      navigate("/not-found-already-log");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    userlastname: "",
    userfirstname: "",
    email: "",
    password: "",
    password_confirm: "",
  });

  // function to update the value of the form when it changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // function to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if email ends with '@ecole-hexagone.com'
    if (!formData.email.endsWith("@ecole-hexagone.com")) {
      console.error(
        'L\'adresse e-mail doit se terminer par "@ecole-hexagone.com"',
      );
      return;
    }
    // Check other form data...
    if (formData.password !== formData.password_confirm) {
      console.error("Les mots de passe ne correspondent pas");
      return;
    }
    // send data to the backend if all checks pass
    sendDataToBackend(formData);
  };

  // function to send data to the backend
  const sendDataToBackend = (data) => {
    if (props.id) {
      fetch(`/log/update/${props.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          // ok message
          console.log("Réponse du serveur :", response);
        })
        .catch((error) => {
          // error message
          console.error("Erreur lors de l'envoi des données :", error);
        });
    } else {
      fetch("/log/signup/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          // ok message
          console.log("Réponse du serveur :", response);
          navigate("/log/connection");
        })
        .catch((error) => {
          // error message
          console.error("Erreur lors de l'envoi des données :", error);
        });
    }
  };

  useEffect(() => { 
  }, [props.id]);

  return (
    <>
      <Row>
        <div className="col-4"></div>
        <div className="col-lg-4 p-5">
          <Form onSubmit={handleSubmit} className="rounded-4 border-hexa p-3">
            <Row className="mt-3">
              <Form.Group md="auto" controlId="validLastName">
                <Form.Label className="color-text">Nom</Form.Label>
                <Form.Control
                  name="userlastname"
                  value={formData.userlastname}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Dupont"
                />
                <Form.Control.Feedback>Parfait !</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mt-3">
              <Form.Group md="auto" controlId="validFirstName">
                <Form.Label className="color-text">Prénom</Form.Label>
                <Form.Control
                  name="userfirstname"
                  value={formData.userfirstname}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="Jean"
                />
                <Form.Control.Feedback>Parfait !</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mt-3">
              <Form.Group md="auto" controlId="validEmail">
                <Form.Label className="color-text">Email d'Hexagone</Form.Label>
                <Form.Control
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="text"
                  placeholder="prénom.nom@ecole-hexagone.com"
                />
                <Form.Control.Feedback>Parfait !</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mt-3">
              <Form.Group md="auto" controlId="validPassword">
                <Form.Label className="color-text">Mot de passe</Form.Label>
                <Form.Control
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  type="password"
                  placeholder="********"
                />
                <Form.Control.Feedback>Parfait !</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mt-3">
              <Form.Group md="auto" controlId="confirmValidPassword">
                <Form.Label className="color-text">Confirmation du mot de passe</Form.Label>
                <Form.Control
                  name="password_confirm"
                  value={formData.password_confirm}
                  onChange={handleChange}
                  required
                  type="password"
                  placeholder="********"
                />
                <Form.Control.Feedback>Parfait !</Form.Control.Feedback>
              </Form.Group>
            </Row>
            {(() => { // Render a button or a disabled button depending on the form data
              if (
                formData.userfirstname === "" ||
                formData.userlastname === "" ||
                formData.email === "" ||
                formData.password === "" ||
                formData.password_confirm === ""
              ) { // If the form is not filled, render a disabled button
                return (
                  <>
                    <div className="mt-3 d-flex justify-content-center">
                      <p className="text-danger">
                        Veuillez remplir tous les champs
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <DisabledButton type="submit" description="S'inscrire" />
                    </div>
                  </>
                );
              } else if (formData.password !== formData.password_confirm) { // If the passwords are not identical, render a disabled button
                return (
                  <>
                    <div className="mt-3 d-flex justify-content-center">
                      <p className="text-danger">
                        Les mots de passe ne sont pas identiques
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <DisabledButton type="submit" description="S'inscrire" />
                    </div>
                  </>
                );
              } else if (!formData.email.endsWith("@ecole-hexagone.com")) { // If the email does not end with "@ecole-hexagone.com", render a disabled button
                return (
                  <>
                    <div className="mt-3 d-flex justify-content-center">
                      <p className="text-danger">
                        L'adresse e-mail doit se terminer par
                        "@ecole-hexagone.com"
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <DisabledButton type="submit" description="S'inscrire" />
                    </div>
                  </>
                );
              } else { // If the form is filled, render a button
                return (
                  <>
                    <div className="d-flex justify-content-center">
                      <p className="text-white">|</p>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                      <Button type="submit" description="S'inscrire" />
                    </div>
                  </>
                );
              }
            })()}
          </Form>
        </div>
        <div className="col-4"></div>
      </Row>
    </>
  );
}
