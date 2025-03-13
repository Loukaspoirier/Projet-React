import React from "react";
import { useNavigate } from "react-router-dom";

export default function LinkLogo(props) {
  const navigate = useNavigate();
  function redirect() {
    navigate(props.link);
  }
  return (
    <button className="logo">
      <img
        className="fixed"
        onClick={redirect}
        src="/logo.png"
        alt="Écusson BDE"
      ></img>
    </button>
  );
}
