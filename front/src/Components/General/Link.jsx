import React from "react";
import { useNavigate } from "react-router-dom";

export default function Link(props) {
  const navigate = useNavigate();
  function redirect() {
    navigate(props.link);
  }
  return (
    <button className="link-footer-nav-bar yellow-hexagone" onClick={redirect}>
      {props.description}
    </button>
  );
} 
