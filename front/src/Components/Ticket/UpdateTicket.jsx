import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../General/Tools/Button/Button";

export default function UpdateTicket(props) {
  const navigate = useNavigate();
  function redirect() {
    if (props.back) {
      navigate("/back/update/ticket/" + props.id + "/" + props.back);
    } else {
      navigate("/ticket/update/" + props.id);
    }
  }
  return (
    <div>
      <Button onClick={redirect} description="Modifier" type="button" />
    </div>
  );
}
