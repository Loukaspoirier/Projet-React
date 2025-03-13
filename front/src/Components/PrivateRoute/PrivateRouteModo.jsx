import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import NotFoundNotLog from "../../Pages/General/NotFound/NotFoundNotLog";
import NotFoundRoles from "../../Pages/General/NotFound/NotFoundRoles";

export default function PrivateRouteModo() { // This is a private route component for moderator users
  const userRole = localStorage.getItem("roles"); // Get the user's role from local storage
  const navigate = useNavigate(); // Get the navigate function from the useNavigate hook
  const [signups, setSignups] = useState([]); // Create a state to store the signups
  // Get the user's role from local storage
  const userId = parseInt(localStorage.getItem('id'), 10);
  /* const fetchData = async () => { // Create a function to fetch the signups
    try {
      const response = await fetch("/check-id", { // Fetch the signups from the server
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      const data = await response.json(); // Parse the JSON response
      setSignups(data);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des roles :",
        error.message,
      );
    }
  };

  fetchData(); // Call the fetchData function when the component renders */

  /* useEffect(() => { // Function who check if the user is always existed in the database
  if (userId && signups.length > 0) { // If the user is logged in and the signups have been fetched
    let isUserSignedUp = false;
    for (let i = 0; i < signups.length; i++) {
      if (userId === signups[i]) {
        isUserSignedUp = true;
        break;
      }
    }
    
    if (!isUserSignedUp) { // If the user is not signed up, navigate to the NotFoundNotLog component
      navigate("/not-found-not-log");
    }
  }
}, [userId, signups, navigate]); */

  // If the user is not logged in (no role found), render the NotFoundNotLog component
  if (!userRole) { // If the user is not logged in (no role found), render the NotFoundNotLog component
    return <NotFoundNotLog />;
  }

  // If the user is logged in but is not a moderator or admin, render the NotFoundRoles component
  if (userRole !== "ROLE_MODO" && userRole !== "ROLE_ADMIN") { 
    return <NotFoundRoles />;
  }

  // If the user is a moderator or admin, render the children of this route
  return <Outlet />;
}
