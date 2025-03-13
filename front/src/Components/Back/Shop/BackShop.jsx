import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import UpdateShop from "../../Shop/UpdateShop";


export default function BackShop(props) {
    // State to manage the modal's visibility
    const [show, setShow] = useState(false);
    // Functions to show and hide the modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // component to display the shop card with a button to update and delete the shop
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.picture} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Button variant="primary" onClick={handleShow}>
            Modifier
          </Button>
          <Button variant="danger" onClick={() => DeleteShop(props.id)}>
            Supprimer
          </Button>
        </Card.Body>
        <UpdateShop
          show={show}
          handleClose={handleClose}
          id={props.id}
          title={props.title}
          description={props.description}
          photo={props.picture}
        />
      </Card>
    );
  }