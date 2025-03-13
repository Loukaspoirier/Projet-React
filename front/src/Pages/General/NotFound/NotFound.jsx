import * as React from "react";
import RedirectButton from "../../../Components/General/Tools/Button/RedirectButton";
import Row from "react-bootstrap/Row";
import "../../../index.css";

export default function NotFound() { // This component is the 404 page
  return (
    <div className="bg-line-1 m-0 p-0">
      <Row className="d-flex justify-content-center my-5 py-5">
        <img
          className="w-25"
          src="https://cdn.discordapp.com/attachments/1206615852993216532/1214152805921849384/flying.png?ex=65f812ea&is=65e59dea&hm=e0bb3aeb30c77e66af7ce6289d1d53fae2560a946fc95a9b47b7710a2083ea7e&"
          alt="Page qui se fait enlever par une soucoupe volante"
        />
      </Row>
      <Row>
        <div className="col-2"></div>
        <div className="col d-flex justify-content-center align-items-center pt-3 pb-1 bg-white-border">
          <p>
            Oh non ! Cette page s'est fait enlever par une soucoupe volante,
            retournez en sécurité en cliquant sur le bouton en dessous !!
          </p>
        </div>
        <div className="col-2"></div>
      </Row>
      <Row>
        <div className="d-flex justify-content-center pt-4">
          {(() => { // Redirects the user to the home page if he is not connected, else to the login page
            if (!localStorage.getItem("id")) {
              return (
                <RedirectButton link="/log" description="Connectez vous" />
              );
            } else {
              return <RedirectButton link="/" description="Acceuil" />;
            }
          })()}
        </div>
      </Row>
    </div>
  );
}
