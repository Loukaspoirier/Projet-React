import React from "react";
import Firstname from "./Firstname";
import Lastname from "./Lastname";

export default function Username() { // This component is used to display the user's first and last name
  return (
    <>
      <div className="d-flex justify-content-start">
        <Firstname />
        <div className="ps-1">
          <Lastname />
        </div>
      </div>
    </>
  );
}
