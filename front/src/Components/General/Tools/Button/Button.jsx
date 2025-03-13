import React from "react";

export default function Button(props) {
  return (
    <button
      className={"btn background-yellow-hexagone " + props.class}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.description}
    </button>
  );
}
