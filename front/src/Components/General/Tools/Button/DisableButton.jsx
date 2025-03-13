import React from "react";

export default function DisabledButton(props) {
  return (
    <button
      className="btn background-yellow-hexagone disabled"
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.description}
    </button>
  );
}
