import React from "react";
import Card from "react-bootstrap/Card";

export default function PhotoCard({ image, title, description, onClick }) {
  // Rendering a card component to display photo details
  return (
    <>
      <Card
        className="card-photo p-1"
        style={{ width: "18rem" }}
        onClick={onClick}
      >
        <Card.Img className="img-rounded img-responsive" src={image} />
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card>
    </>
  );
}
