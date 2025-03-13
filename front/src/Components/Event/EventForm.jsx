import React, { useEffect, useState } from "react";
import Button from "../General/Tools/Button/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

export default function EventForm(props) { 
  const navigate = useNavigate();

  // Create a state to store the form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    picture: "",
  });
  const [loading, setLoading] = useState(false);

  // Create a function to handle the form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(formData);
  };

  // Create a function to handle the form submission
  const handleSubmit = (e) => { 
    e.preventDefault();
    console.log("Form submitted");
    sendDataToBackend(formData);
  };

  // Create a function to send the form data to the backend, if there is an id in the props, it will update the data, otherwise it will create a new entry
  const sendDataToBackend = (data) => {
    fetch("/event/create", {
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
    redirect();
  };

  // Function to redirect to the event front page after with submited data
  function redirect() {
    navigate("/event");
  }

  // function to fetch existing data for the selected event
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/event/read/" + props.id, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      // Update shop form data with fetched values title, description, picture, date
      const data = await response.json();
      setFormData({
        title: data.title,
        description: data.description,
        date: data.date,
        picture: data.picture,
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

  // Fetch data on component mount if a event item ID is provided
  useEffect(() => {
    if (props.id) {
      fetchData();
    }
  }, []);

  // Render the form with input fields and a submission button
  return (
    <Form noValidate className="container" onSubmit={handleSubmit}>
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
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3 ms-3">
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label className="color-text">Date</Form.Label>
          <Form.Control
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            type="date"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3 ms-3">
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label className="color-text">Image</Form.Label>
          <Form.Control
            name="picture"
            value={formData.picture}
            onChange={handleChange}
            required
            type="text"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-3 ms-3">
        <Form.Group as={Col} md="9" controlId="validationCustom04">
          <Form.Label className="color-text">Description</Form.Label>
          <Form.Control
            name="description"
            value={formData.description}
            onChange={handleChange}
            as="textarea"
            required
            placeholder="Description"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button
        type="submit"
        description="Créer le nouvel évènement"
        link="/event"
      ></Button>
    </Form>
  );
}
