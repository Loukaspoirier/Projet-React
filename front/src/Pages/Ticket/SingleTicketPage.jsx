import * as React from "react";
import NavBar from "../../Components/General/Navbar/NavBar";
import ReadTickets from "../../Components/Ticket/ReadTicket";
import { useParams } from "react-router-dom";
import ReadAllMessageTickets from "../../Components/MessageTicket/ReadAllMessageTicket";
import Footer from "../../Components/General/Footer/Footer";
import RedirectButton from "../../Components/General/Tools/Button/RedirectButton";

export default function SingleTicketPage() {
  const { id } = useParams();
  return (
    <div className="overflow-x">
      <NavBar />
      <div className="m-md-3">
        <RedirectButton description="Retour" type="button" link="/ticket" />
      </div>
      <ReadTickets id={id} />
      <ReadAllMessageTickets />
      <Footer />
    </div>
  );
}
