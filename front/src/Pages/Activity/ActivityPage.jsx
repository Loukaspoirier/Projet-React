import * as React from "react";
import NavBar from "../../Components/General/Navbar/NavBar";
import ReadAllActivities from "../../Components/Activity/ReadAllActivities";
import Footer from "../../Components/General/Footer/Footer";

export default function ActivityPage() {
  return (
    <div className="bg-line-6">
      <NavBar />
      <div className="container">
        <h1 className="color-text">Activités récentes</h1>

        <ReadAllActivities />
      </div>
      <Footer />
    </div>
  );
}
