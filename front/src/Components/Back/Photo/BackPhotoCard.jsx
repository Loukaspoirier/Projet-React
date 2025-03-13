import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DeletePhoto from "../../Photo/DeletePhoto";
import UpdatePhoto from "../../Photo/UpdatePhoto";

function BackPhotoCard({ id, title, description, image, reload }) {
  // State variable to track the expanded state of the description
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state of the description
  const toggleExpanded = () => {
    setIsExpanded((prevState) => !prevState);
  };

  // Displaying a truncated or full description based on the expanded state
  const displayDescription = isExpanded ? description : description.length > 60 ? `${description.substring(0, 60)}...` : description;

  // Condition to check if the description is long enough to display the "Voir plus" button
  const showToggle = description.length > 60;

  // Rendering a card component for displaying photo details
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {displayDescription}
          {/* Only render the "Voir plus" button if the description is long enough */}
          {showToggle && (
            <Button variant="link" onClick={toggleExpanded}>
              {isExpanded ? "Voir moins" : "Voir plus"}
            </Button>
          )}
        </Card.Text>

        {/* Rendering components for deleting and updating photos */}
        <DeletePhoto id={id} reload={reload}>
          Delete
        </DeletePhoto>
        <UpdatePhoto id={id} />
      </Card.Body>
    </Card>
  );
}

export default BackPhotoCard;
