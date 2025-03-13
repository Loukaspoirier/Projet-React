import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../General/Tools/Button/Button";

export default function UpdateActivity(props) {
  // Use the useNavigate hook from react-router-dom to get the navigate function.
  const navigate = useNavigate();

  // Define a function called redirect that navigates to the update activity route with the id from props.
  const redirect = () => {
    navigate(`/update/activity/${props.id}`);
  };

  // The component returns a div containing a Button component.
  // The Button's onClick prop is set to the redirect function, description prop is set to "Modifier", and type prop is set to "button".
  return (
    <div>
      <Button onClick={redirect} description="Modifier" type="button" />
    </div>
  );
}
