import React, { useEffect, useState } from "react";
import Button from "../General/Tools/Button/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

export default function ShopUpdateForm(props) {

  // React hook for navigation
  const navigate = useNavigate();

  // State to manage form data and loading state
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    picture: "",
  }); 
  const [loading, setLoading] = useState(false);

  // Event handler for input changes in the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior (cancel page refresh)
    console.log("Form submitted"); // Form submitted console log message usefull form debugging
    sendDataToBackend(formData);   // Calls the sendDataToBackend function just below with the current form data as an argument
  };

  // Function to send updated data to the backend
  const sendDataToBackend = (data) => {
    fetch("/shop/update/" + props.id, {
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
  // Function to redirect to the shop front page after with submited data
  function redirect() {
    navigate("/shop");
  }

  // Function to fetch existing data for the selected shop item
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/shop/read/" + props.id, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      const data = await response.json();
      // Update shop form data with fetched values title, description, picture, price
      setFormData({
        title: data.title,
        description: data.description,
        picture: data.picture,
        price: data.price,
      });
      setLoading(false);
    } catch (error) { // Error console log message
      console.error(
        "Erreur lors de la récupération de la couleur :",
        error.message,
      );
      setLoading(false);
    }
  };

  // Fetch data on component mount if a shop item ID is provided
  useEffect(() => {
    if (props.id) {
      fetchData();
    }
  }, []);

  // Same as the shop form, but we get the data from the backend to fill the form
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
          <Form.Label className="color-text">Prix</Form.Label>
          <Form.Control
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            type="integer"
            placeholder="Prix en €"
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
            placeholder="Entrez l'url de l'image"
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
            placeholder="Veuillez entrer une description du produit"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button
        type="submit"
        description="Valider la modification"
        link="/shop/back"
      ></Button>
    </Form>
  );
}