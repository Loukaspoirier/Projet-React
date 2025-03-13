import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../General/Tools/Button/Button";

export default function MessageTicketUpdate(props) {
  const navigate = useNavigate();
  function redirect() {
    navigate(`/ticket/${props.ticketId}/message/update/${props.messageId}`);
  }

  return (
    <div>
      <Button onClick={redirect} description="Modifier" type="button" />
    </div>
  );
}
