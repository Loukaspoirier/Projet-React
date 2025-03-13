import React, { useState, useEffect } from "react";

export default function Lastname() { // This component is used to display the user's last name
  const [lastname, setLastname] = useState(null);
  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) {
      const emailParts = email.split(".");
      if (emailParts.length > 1) {
        let lastname = emailParts[1].split("@")[0]; // Get the last name from the email
        lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1); // Capitalize the first letter of the last name
        setLastname(lastname);
      }
    }
  }, []); // The effect runs only once when the component is mounted
  return (
    <div>
      <p>{lastname}</p>
    </div>
  );
}
