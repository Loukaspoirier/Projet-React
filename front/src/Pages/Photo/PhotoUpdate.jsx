import * as React from "react";
import PhotoUpdateForm from "../../Components/Photo/PhotoUpdateForm";
import { useParams } from "react-router-dom";

export default function PhotoUpdate() {
  // Extracting the 'id' parameter from the URL using useParams hook
  const { id } = useParams();
  return (
    // Rendering the PhotoUpdateForm component with the 'id' parameter
    <PhotoUpdateForm id={id} />
  );
}
