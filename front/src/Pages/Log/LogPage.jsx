import * as React from "react";
import RedirectButton from "../../Components/General/Tools/Button/RedirectButton";
import Row from "react-bootstrap/Row";
import "../../index.css";

export default function LogPage() { // This component is the log page
  return (
    <div className="bg-log m-0 p-0">
      <Row className="d-flex justify-content-center mt-5 pt-5">
        <img
          className="w-25"
          src="./logo.png"
          alt="logo-bde"
          id="image-responsive"
        />
      </Row>
      <div className="d-flex justify-content-evenly mt-5 pt-5">
        <RedirectButton link="/log/signup" description="Inscription" />

        <RedirectButton link="/log/connection" description="Connexion" />
      </div>
    </div>
  );
}
