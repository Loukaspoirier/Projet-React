import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "../General/Tools/Button/Button";
import "../../index.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ActivityUpdateForm(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [sondage, setSondage] = useState(false);

  function addSondage() {
    setSondage((prevState) => true);
  }

  // function to update the value of the form when it changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send data to the back
    sendDataToBackend(formData);
  };

  // function to send data to the backend
  const sendDataToBackend = (data) => {
    fetch(`/activity/update/${props.id}`, {
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
  function redirect() {
    navigate("/activity");
  }
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/activity/read/" + props.id, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      const data = await response.json();
      setFormData({ description: data.description });
      setLoading(false);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de la données :",
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
    <>
      <Row>
        <div className="col-2"></div>
        <div className="col-8">
          <Form onSubmit={handleSubmit} className="rounded-4 border-hexa p-3">
            <Row className="mt-3"></Row>
            <Row className="mt-3">
              <Form.Group md="auto" controlId="validDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  placeholder="Votre texte"
                  rows={10}
                />
                <Form.Control.Feedback>Parfait !</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className="mt-3 d-flex justify-content-center">
              <Button type="submit" description="Modifier" />
            </div>
          </Form>
        </div>
      </Row>
    </>
  );
}
