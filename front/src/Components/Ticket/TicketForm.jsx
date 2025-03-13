import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../General/Tools/Button/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function TicketForm(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    email: "",
    status: "KO",
  });
  const [loading, setLoading] = useState(false);
  const { back } = useParams();

  // function to update the value of the form when it chnzges
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

  // function to send data tp the back
  const sendDataToBackend = (data) => {
    setLoading(true);
    if (props.id) {
      fetch("/ticket/update/" + props.id, {
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
      fetch("/ticket/create", {
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
    back ? navigate("/back/ticket") : navigate("/ticket");
  }

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/ticket/read/" + props.id, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      const data = await response.json();
      setFormData({
        title: data.title,
        description: data.content,
        email: data.email,
        status: data.status,
      });
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
    if (props.id) {
      fetchData();
    }
  }, []);

  return (
    <div className="overflow-x">
      {loading ? (
        <div className="row">
          <div className="col-5">{/* none */}</div>
          <div className="col-2 ps-5 ms-md-5 my-md-5">
            <div className="dots"></div>
            <div className="col-5"></div>
          </div>
        </div>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3 ms-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label className="color-text">Titre</Form.Label>
              <Form.Control
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                type="text"
                placeholder="Titre"
                pattern="[A-Za-z0-9\s]+"
              />

              <Form.Control.Feedback type="invalid">
                rentrer une valeur correct
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3 ms-3">
            <Form.Group as={Col} md="9" controlId="validationCustom02">
              <Form.Label className="color-text">Mail</Form.Label>
              <Form.Control
                name="email"
                value={
                  !back
                    ? (formData.email = localStorage.getItem("email"))
                    : formData.email
                }
                type="email"
                required
                disabled
                placeholder="Mail"
                patern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />

              <Form.Control.Feedback type="invalid">
                Valeur correct
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3 ms-3">
            <Form.Group as={Col} md="9" controlId="validationCustom03">
              <Form.Label className="color-text">Description</Form.Label>
              <Form.Control
                name="description"
                value={formData.description}
                onChange={handleChange}
                as="textarea"
                placeholder="Description"
                pattern="[A-Za-z0-9\s]+"
                required
              />
              <Form.Control.Feedback type="invalid">
                rentrer une valeur correct
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          {back ? (
            <Row className="mb-3 ms-3">
              <Form.Group as={Col} md="9" controlId="validationCustom03">
                <Form.Control
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                  as="select"
                  required
                >
                  <option value="KO">KO</option>
                  <option value="OK">OK</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  rentrer une valeur correct
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          ) : (
            ""
          )}

          <Button type="submit" description="Valider" link="/ticket" />
        </Form>
      )}
    </div>
  );
}
