import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../General/Tools/Button/Button";

export default function UpdatePhoto(props) {
  // Using react-router-dom's hook to enable navigation
  const navigate = useNavigate();

  // Function to redirect to the update photo page
  function redirect() {
    navigate(`/photo/update/${props.id}`);
  }

  // Rendering a button component to trigger the redirection
  return <Button onClick={redirect} description="Modifier " type="button" />;
}
