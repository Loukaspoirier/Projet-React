import React, { useEffect } from "react";
import RedirectButton from "../../../Components/General/Tools/Button/RedirectButton";
import Row from "react-bootstrap/Row";
import "../../../index.css";

export default function NotFoundNotLog() { // This component is the not log in page
  
  useEffect(() => { // Clear the local storage when the user is not log in
    localStorage.clear();
  }, []);

  return (
    <div className="bg-line-1 m-0 p-0">
      <Row className="d-flex justify-content-center my-5 py-5">
        <img
          className="w-25"
          src="https://cdn.discordapp.com/attachments/1206615852993216532/1214152806282301450/signal.png?ex=65f812ea&is=65e59dea&hm=b021c76c231c2f357b04149abe2f6f22b4a155d9ef58acd45e378ee0116c95b5&"
          alt="Panneau d'interdiction"
        />
      </Row>
      <Row>
        <div className="col-2"></div>
        <div className="col d-flex justify-content-center align-items-center pt-3 pb-1 bg-white-border">
          <p>Vous n'êtes pas connecté, veuillez-vous connecter</p>
        </div>
        <div className="col-2"></div>
      </Row>
      <Row>
        <div className="d-flex justify-content-center pt-4">
          <RedirectButton link="/log" description="Connectez vous" />
        </div>
      </Row>
    </div>
  );
}
