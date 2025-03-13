import * as React from "react";
import RedirectButton from "../../../Components/General/Tools/Button/RedirectButton";
import Row from "react-bootstrap/Row";
import "../../../index.css";

export default function NotFoundForeseen() { // This component is the foreseen page
  return (
    <div className="bg-line-1 m-0 p-0">
      <Row className="d-flex justify-content-center my-5 py-5">
        <img
          className="w-25"
          src="https://cdn.discordapp.com/attachments/1206615852993216532/1214152806722969630/work-in-progress.png?ex=65f812ea&is=65e59dea&hm=b532e264d4c92d12738297dcfaaa80138fbfa8aeb859a6ff9fbc0401909b056d&"
          alt="Une personne qui travail dans le battiment"
        />
      </Row>
      <Row>
        <div className="col-2"></div>
        <div className="col d-flex justify-content-center align-items-center pt-3 pb-1 bg-white-border">
          <p>
            Oups, cette page est en cours de création et elle sera bientot
            disponible ! Cliquez sur le bouton pour revenir du bon côté de la
            force !!
          </p>
        </div>
        <div className="col-2"></div>
      </Row>
      <Row>
        <div className="d-flex justify-content-center pt-4">
          {(() => {
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
