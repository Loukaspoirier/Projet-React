import * as React from "react";
import BackNavBar from "../../../Components/Back/BackNavBar";
import "../../../index.css";
import RedirectButton from "../../../Components/General/Tools/Button/RedirectButton";

export default function HomePageBack() { // This component is the home page for the admin interface
  return (
    <div className="bg-line-3">
      <BackNavBar />
      <div className="d-flex justify-content-center mt-5 pt-5">
        <h1 className="text-center color-text">
          Bienvenue sur la page d'accueil de l'interface administrateur
        </h1>
      </div>
      <div className="d-flex justify-content-center pt-5">
        <RedirectButton link="/" description="Accueil" />
      </div>
    </div>
  );
}
