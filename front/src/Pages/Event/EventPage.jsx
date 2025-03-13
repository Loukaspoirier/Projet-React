import React from "react";
import NavBar from "../../Components/General/Navbar/NavBar";
import Footer from "../../Components/General/Footer/Footer";
import ReadAllEvent from "../../Components/Event/ReadAllEvent";

export default function EventPage() {

  // using NavBar, ReadAllEvent and Footer components to make the EventPage
  return (
    <div>
      <NavBar />
      <div className="p-5">
        <ReadAllEvent />
      </div>
      <Footer />
    </div>
  );
}
