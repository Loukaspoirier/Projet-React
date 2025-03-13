import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../General/Tools/Button/Button";

export default function LogoutButton() { // This component is used to log out the user
  const navigate = useNavigate();

  const handleLogout = () => { // This function is used to log out the user
    localStorage.clear();

    navigate("/log");
  };

  return <Button onClick={handleLogout} description="Déconnexion" />;
}
