import NavBar from "../../Components/General/Navbar/NavBar";
import ReadAllTickets from "../../Components/Ticket/ReadAllTickets";
import RedirectButton from "../../Components/General/Tools/Button/RedirectButton";
import * as React from "react";
import Footer from "../../Components/General/Footer/Footer";

export default function TicketPage() {
  return (
    <div>
      <NavBar />
      <div className="p-3">
        <RedirectButton link="/ticket/create" description="Créer un ticket" />
        <ReadAllTickets />
      </div>
      <Footer />
    </div>
  );
}
