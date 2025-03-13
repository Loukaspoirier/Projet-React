import NavBar from "../../Components/General/Navbar/NavBar";
import * as React from "react";
import ReadAllMessageTickets from "../../Components/MessageTicket/ReadAllMessageTicket";
import Footer from "../../Components/General/Footer/Footer";

export default function MessageTicketPage() {
  return (
    <div>
      <NavBar />
      <ReadAllMessageTickets />
      <Footer />
    </div>
  );
}
