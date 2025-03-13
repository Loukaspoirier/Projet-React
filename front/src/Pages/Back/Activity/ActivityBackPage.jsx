import * as React from "react";
import RedirectButton from "../../../Components/General/Tools/Button/RedirectButton";
import ReadAllActivityBack from "../../../Components/Back/Activity/ReadAllActivityBack";
import Footer from "../../../Components/General/Footer/Footer";
import BackNavBar from "../../../Components/Back/BackNavBar";

export default function ActivityBackPage() {
  return (
    <div className="bg-line-6">
      <BackNavBar />
      <div className="container">
        <h1 className="color-text">Activités récentes</h1>

        <RedirectButton
          link="/create/activity"
          description="Ajouter une activité"
        />
        <ReadAllActivityBack />
      </div>
      <Footer />
    </div>
  );
}
