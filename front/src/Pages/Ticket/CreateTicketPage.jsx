import * as React from "react";
import NavBar from "../../Components/General/Navbar/NavBar";
import TicketForm from "../../Components/Ticket/TicketForm";
import { useParams } from "react-router-dom";
import BackNavBar from "../../Components/Back/BackNavBar";
import Footer from "../../Components/General/Footer/Footer";

export default function CreateTicketPage(props) {
  const { id, back } = useParams();

  return (
    <div>
      {back ? <BackNavBar /> : <NavBar />}
      <h3 className="color-text">Posez votre question en remplissant le formulaire ci dessous</h3>
      <div className="p-5">
        {id ? (
          <TicketForm id={id} />
        ) : (
          <p>
            <TicketForm />
          </p>
        )}
      </div>
      <Footer />
    </div>
  );
}
