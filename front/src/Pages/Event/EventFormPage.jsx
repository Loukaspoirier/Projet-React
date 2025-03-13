import * as React from "react";
import BackNavBar from "../../Components/Back/BackNavBar";
import EventForm from "../../Components/Event/EventForm";

export default function EventFormPage() {

  // using NavBar and EventForm components to make the EventFormPage
  return (
    <div>
      <BackNavBar />
         <EventForm />
    </div>
  );
}
