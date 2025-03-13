import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DeleteEvent from "../../Event/DeleteEvent";
import UpdateEvent from "../../Event/UpdateEvent";

export default function BackEvent(props) {
  // State to manage the modal's visibility
  const [show, setShow] = useState(false);
  // Functions to show and hide the modal
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // component to display the event card with a button to update and delete the event
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.photo} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <Button variant="primary" onClick={handleShow}>
          Modifier
        </Button>
        <Button variant="danger" onClick={() => DeleteEvent(props.id)}>
          Supprimer
        </Button>
      </Card.Body>
      <UpdateEvent
        show={show}
        handleClose={handleClose}
        id={props.id}
        title={props.title}
        description={props.description}
        photo={props.photo}
      />
    </Card>
  );
}
