import * as React from "react";
import EventUpdateForm from "../../Components/Event/EventUpdateForm";
import { useParams } from "react-router-dom";
import BackNavBar from "../../Components/Back/BackNavBar";

export default function EventUpdatePage() {

  // Use the useParams hook to get the id from the URL
  const { id } = useParams();
  return (
    <div>
      <BackNavBar />
      <EventUpdateForm id={id} />
    </div>
    );
}
