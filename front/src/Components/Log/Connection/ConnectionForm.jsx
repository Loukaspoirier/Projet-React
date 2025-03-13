import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "../../General/Tools/Button/Button";
import { useNavigate } from "react-router-dom";
import DisabledButton from "../../General/Tools/Button/DisableButton";

export default function ConnectionForm() { // This component is used to connect to the application
  const navigate = useNavigate();
  const [error, setError] = useState(""); // State variable for error message

  useEffect(() => { // This effect is used to check if the user is already logged in
    if (localStorage.getItem("id")) {
      navigate("/not-found-already-log");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({ // State variable for form data
    email: "",
    password: "",
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    // send data to the backend
    sendDataToBackend(formData);
  };

  // function to send data to the backend
  const sendDataToBackend = async (data) => {
    try {
      const response = await fetch("/log/connection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Erreur lors de la requête : ${response.status}`);
      }

      const responseData = await response.json();

      if (response.ok) { // If the connection is successful, redirect the user
        // Store the user's data in local storage
        let stringRoles = responseData.roles[0];
        localStorage.setItem(
          "id",
          responseData.id,
        );
        localStorage.setItem("email", responseData.email); 
        localStorage.setItem("roles", stringRoles);

        navigate("/");
      } else { // If the connection is not successful, display an error message
        setError("Erreur lors de la connexion: " + responseData.error);
      }
    } catch (error) { // If the connection is not successful, display an error message
      setError("L'adresse e-mail ou le mot de passe est incorrecte.");
    }
  };

  return (
    <>
      {error && <div className="error-message">{error}</div>} {/* Render error message */}
      <Row>
        <div className="col-4"></div>
        <div className="col-lg-4 p-5">
          <Form onSubmit={handleSubmit} className="rounded-4 border-hexa p-3">
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
              <Form.Group md="auto" controlId="_remember_me">
                <Form.Label className="color-text">Se souvenir de moi</Form.Label>
                <Form.Check
                  type="switch"
                  name="_remember_me"
                  label=""
                  custom="true"
                  className="check"
                />
              </Form.Group>
            </Row>
            {(() => { // Render a button or a disabled button depending on the form data
              if (!formData.email.endsWith("@ecole-hexagone.com")) { // If the email does not end with "@ecole-hexagone.com"
                return (
                  <>
                    <div className="mt-3 d-flex justify-content-center">
                      <p className="text-danger">
                        L'adresse e-mail doit se terminer par
                        "@ecole-hexagone.com"
                      </p>
                    </div>
                    <div className="d-flex justify-content-center">
                      <DisabledButton
                        type="submit"
                        description="Se connecter"
                      />
                    </div>
                  </>
                );
              } else { // If the email ends with "@ecole-hexagone.com"
                return (
                  <>
                    <div className="d-flex justify-content-center">
                      <p className="text-white">|</p>
                    </div>
                    <div className="mt-3 d-flex justify-content-center">
                      <Button type="submit" description="Se connecter" />
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
