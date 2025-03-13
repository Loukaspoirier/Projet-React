import React, { useState, useEffect } from "react";

export default function Firstname() { // This component is used to display the user's first name
  const [firstname, setFirstname] = useState(null);

  useEffect(() => { // This effect is used to get the user's email from local storage and display the first name
    const email = localStorage.getItem("email");
    if (email) {
      let firstname = email.split(".")[0]; // Get the first name from the email
      firstname = firstname.charAt(0).toUpperCase() + firstname.slice(1); // Capitalize the first letter of the first name
      setFirstname(firstname);
    }
  }, []); // The effect runs only once when the component is mounted
  return (
    <div>
      <p>{firstname}</p>
    </div>
  );
}
