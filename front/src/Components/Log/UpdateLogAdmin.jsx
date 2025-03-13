import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../General/Tools/Button/Button";

export default function UpdateLogAdmin(props) { // This component is used to update a log for an admin
  // Using react-router-dom's hook to enable navigation
  const navigate = useNavigate();

  // Function to redirect to the update log page
  function redirect() {
    navigate(`/log/update/admin/${props.id}`);
  }

  // Rendering a button component to trigger the redirection
  return <Button onClick={redirect} description="Modifier" type="button" />;
}
