import React, { useState, useEffect } from "react";
import Badge from "react-bootstrap/Badge";
import Stack from "react-bootstrap/Stack";

export default function BadgeStatus(props) {
  const [color, setColor] = useState("success");

  useEffect(() => {
    //the status of a ticket can only be OK and KO
    if (props.status === "KO") {
      setColor("danger");
    } else {
      setColor("success");
    }
  }, [props.status]);

  return (
    <Stack direction="horizontal" gap={2}>
      <Badge bg={color}>{props.status}</Badge>
    </Stack>
  );
}
