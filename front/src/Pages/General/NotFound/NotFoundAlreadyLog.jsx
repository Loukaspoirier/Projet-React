import * as React from "react";
import RedirectButton from "../../../Components/General/Tools/Button/RedirectButton";
import Row from "react-bootstrap/Row";
import "../../../index.css";

export default function NotFoundAlreadyLog() { // This component is the already log in page
  return (
    <div className="bg-line-1 m-0 p-0">
      <Row className="d-flex justify-content-center my-5 py-5">
        <img
          className="w-25"
          src="https://cdn.discordapp.com/attachments/1206615852993216532/1214152807150649365/user.png?ex=65f812eb&is=65e59deb&hm=eb9822536b716637a2af2a368019ff565cca1271e32afb041c61b5d200822dff&"
          alt="Forme d'une personne"
        />
      </Row>
      <Row>
        <div className="col-2"></div>
        <div className="col d-flex justify-content-center align-items-center pt-3 pb-1 bg-white-border">
          <p>
            Vous êtes déjà connecté, vous n'avez donc pas besoin de vous
            reconnecter...
          </p>
        </div>
        <div className="col-2"></div>
      </Row>
      <Row>
        <div className="d-flex justify-content-center pt-4">
          <RedirectButton link="/" description="Acceuil" />
        </div>
      </Row>
    </div>
  );
}
