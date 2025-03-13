import React, { useEffect, useState } from "react";
import Button from "../General/Tools/Button/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";

export default function ShopForm(props) {
  const navigate = useNavigate();

  // Create a state to store the form data
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prix: "",
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
    if (props.id) {
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
    } else {
      fetch("/shop/create", {
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
    }
  };

  // function to redirect to the shop front page after with submited data
  function redirect() {
    navigate("/shop");
  }

  // function to fetch existing data for the selected shop item
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

      // Update shop form data with fetched values title, description, picture, price
      const data = await response.json();
      setFormData({
        title: data.title,
        description: data.content,
        price: data.price,
        image: data.image,
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

  // Fetch data on component mount if a shop item ID is provided
  useEffect(() => {
    if (props.id) {
      fetchData();
    }
  }, []);

  // Render the form with input fields and a submission button
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
                type="price"
                placeholder="€"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3 ms-3">
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label className="color-text">Image</Form.Label>
              <Form.Control
                name="picture"
                onChange={handleChange}
                value={formData.picture}
                required
                type="text"
                placeholder="Url de l'image"
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
            description="Créer le nouvel article"
            link="/admin/shop"
          ></Button>
        </Form>
      )}
    </div>
  );
}
