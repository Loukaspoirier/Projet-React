import * as React from "react";
import ReadTickets from "../../../Components/Ticket/ReadTicket";
import { useParams } from "react-router-dom";
import RedirectButton from "../../../Components/General/Tools/Button/RedirectButton";
import ReadAllMessageTickets from "../../../Components/MessageTicket/ReadAllMessageTicket";
import BackNavBar from "../../../Components/Back/BackNavBar";
import Footer from "../../../Components/General/Footer/Footer";

export default function BackTicketSinglePage() {
  const { id } = useParams();
  return (
    <div className="overflow-x">
      <BackNavBar />
      <div className="m-md-3">
        <RedirectButton
          description="Retour"
          type="button"
          link="/back/ticket"
        />
      </div>
      <ReadTickets id={id} />
      <div className="ms-md-5">
        <RedirectButton
          link={`/ticket/${id}/create/`}
          description="Ajouter une réponse"
          tpe="button"
        />
      </div>
      <ReadAllMessageTickets />
      <Footer />
    </div>
  );
}
