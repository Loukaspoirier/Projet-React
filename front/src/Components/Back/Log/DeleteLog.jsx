import React from "react";
import Button from "../../General/Tools/Button/Button";

export default function DeleteLog(props) { // This component is used to delete a log
  const confirmDelete = async () => {
    try {
      const response = await fetch("/log/delete/" + props.id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // Reloading data after successful deletion
        props.reload();
      } else {
        throw new Error(`Error deleting account: ${response.status}`);
      }
    } catch (error) {
      console.error("Error deleting account:", error.message);
    }
    window.location.href = "/log/read-all";
  };

  // Rendering a button component to trigger the deletion process
  return (
    <div>
      <Button onClick={confirmDelete} description="Delete" type="button" />
    </div>
  );
}
