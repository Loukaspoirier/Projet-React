import React from "react";
import Button from "../General/Tools/Button/Button";

export default function DeletePhoto(props) {
  // Function to confirm and delete a photo
  const confirmDelete = async () => {
    try {
      const response = await fetch("/photo/delete/" + props.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // Reloading data after successful deletion
        props.reload();
      } else {
        throw new Error(`Error deleting photo: ${response.status}`);
      }
    } catch (error) {
      console.error("Error deleting photo:", error.message);
    }
  };

  // Rendering a button component to trigger the deletion process
  return (
    <div>
      <Button onClick={confirmDelete} description="Supprimer" type="button" />
    </div>
  );
}
