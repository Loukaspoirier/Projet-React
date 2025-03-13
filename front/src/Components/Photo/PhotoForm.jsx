import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../General/Tools/Button/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export default function PhotoForm(props) {
  // Using react-router-dom's hook to enable navigation
  const navigate = useNavigate();
  // State variables for form data and loading status
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  // Function to handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend(formData);
  };

  // Sending form data to the backend server
  const sendDataToBackend = (data) => {
    fetch("/photo/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        console.log("Server response:", response);
      })
      .catch((error) => {
        console.error("Error sending data:", error);
      });
    redirect();
  };

  // Function to redirect to another page
  function redirect() {
    navigate("/backphoto");
  }

  // Function to fetch data from the backend server
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/photo/read/" + props.id, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }

      const data = await response.json();
      setFormData({
        title: data.title,
        description: data.description,
        image: data.image,
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching photo:", error.message);
      setLoading(false);
    }
  };

  // Effect hook to fetch data when component mounts
  useEffect(() => {
    if (props.id) {
      fetchData();
    }
  }, []);
  console.log("formData : ", formData);

  // Rendering form elements based on loading status
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
              <Form.Label>Titre</Form.Label>
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
            <Form.Group as={Col} md="9" controlId="validationCustom02">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                name="image"
                value={formData.image}
                onChange={handleChange}
                type="text"
                required
                placeholder="Image URL"
              />

              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row className="mb-3 ms-3">
            <Form.Group as={Col} md="9" controlId="validationCustom03">
              <Form.Label>Description</Form.Label>
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

          <Button type="submit" description="Envoyer" link="/backphoto" />
        </Form>
      )}
    </div>
  );
}
