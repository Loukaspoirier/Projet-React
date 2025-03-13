import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../General/Tools/Button/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function MessageTicketForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    content: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);
  const { ticketId, messageId, back } = useParams();

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
    // send data to the back
    sendDataToBackend(formData);
  };

  // function to send data to the back
  const sendDataToBackend = (data) => {
    if (messageId) {
      setLoading(true);
      fetch("/ticket/message/update/" + messageId, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          // ok message
          console.log("Réponse du serveur :", response);
          redirect();
          setLoading(false);
        })
        .catch((error) => {
          // error message
          console.error("Erreur lors de l'envoi des données :", error);
          setLoading(false);
        });
    } else {
      fetch(`/ticket/${ticketId}/message/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          // ok message
          console.log("Réponse du serveur :", response);
          redirect();
          setLoading(false);
        })
        .catch((error) => {
          // error message
          console.error("Erreur lors de l'envoi des données :", error);
          setLoading(false);
        });
    }
  };

  function redirect() {
    navigate(`/back/ticket/read/${ticketId}/1`);
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/ticket/message/read/" + messageId, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      const data = await response.json();
      setFormData({ content: data.content, email: data.email });
      setLoading(false);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de la couleur :",
        error.message,
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    if (messageId) {
      fetchData();
    }
  }, []);

  return (
    <div>
      {loading ? (
        <div className="row">
        <div className="col-5">{/* none */}</div>
        <div className="col-2 ps-5 ms-md-5 my-md-5">
          <div className="dots"></div>
          <div className="col-5"></div>
        </div>
      </div>
      ) : (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-3 ms-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Réponse</Form.Label>
              <Form.Control
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                type="text"
                placeholder="Votre réponse"
              />

              <Form.Control.Feedback>Valeur correct</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3 ms-3">
            <Form.Group as={Col} md="9" controlId="validationCustom02">
              <Form.Label>Mail</Form.Label>
              <Form.Control
                name="email"
                value={(formData.email = localStorage.getItem("email"))}
                onChange={handleChange}
                type="email"
                required
                disabled
                placeholder="Votre adresse mail"
              />

              <Form.Control.Feedback>Valeur correct</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Button type="submit" description="Valider" link="/message/ticket" />
        </Form>
      )}
    </div>
  );
}
