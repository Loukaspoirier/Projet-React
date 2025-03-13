import React from "react";

export default function Email() { // This component is used to display the user's email
  return (
    <div>
      <p>{localStorage.getItem("email")}</p>
    </div>
  );
}
