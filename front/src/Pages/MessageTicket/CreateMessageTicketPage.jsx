import * as React from "react";
import NavBar from "../../Components/General/Navbar/NavBar";
import MessageTicketForm from "../../Components/MessageTicket/MessageTicketForm";
import { useParams } from "react-router-dom";
import Footer from "../../Components/General/Footer/Footer";

export default function CreateMessageTicketPage() {
  const { ticketId } = useParams();
  return (
    <div>
      <NavBar />
      <MessageTicketForm ticketId={ticketId} />
      <Footer />
    </div>
  );
}
