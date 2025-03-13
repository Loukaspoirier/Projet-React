import * as React from "react";
import RedirectButton from "../../../Components/General/Tools/Button/RedirectButton";
import Row from "react-bootstrap/Row";
import "../../../index.css";

export default function NotFoundRoles() { // This component is the not roles page
  return (
    <div className="bg-line-1 m-0 p-0">
      <Row className="d-flex justify-content-center my-5 py-5">
        <img
          className="w-25"
          src="https://cdn.discordapp.com/attachments/1206615852993216532/1214152805363744849/access-denied.png?ex=65f812ea&is=65e59dea&hm=11a8838ae1e53070f1ba7d4e062a433790d0aad113c7b05e71770762f32910d6&"
          alt="Panneau d'accès refusé"
        />
      </Row>
      <Row>
        <div className="col-2"></div>
        <div className="col d-flex justify-content-center align-items-center pt-3 pb-1 bg-white-border">
          <p>
            Oups, vous n'avez pas les droits requis pour accéder à cette page !
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
