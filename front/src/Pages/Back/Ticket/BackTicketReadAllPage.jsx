import * as React from "react";
import BackNavBar from "../../../Components/Back/BackNavBar";
import ReadAllTickets from "../../../Components/Ticket/ReadAllTickets";

export default function BackTicketReadAllPage() {
  return (
    <div className="overflow-x">
      <BackNavBar />
      <ReadAllTickets back="1" />
    </div>
  );
}
