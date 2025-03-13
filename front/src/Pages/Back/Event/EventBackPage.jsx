import * as React from "react";
import RedirectButton from "../../../Components/General/Tools/Button/RedirectButton";
import ReadAllEvent from "../../../Components/Event/ReadAllEvent";
import BackNavBar from "../../../Components/Back/BackNavBar";

export default function EventBackPage() {

  // Return the back office event page with a navigation bar, a button to add a new event and the list of all the events
  return (
    <div>
      <BackNavBar />
      <div className="p-3">
        <RedirectButton
          link="/event/back/form"
          description="Ajouter un événement"
        />
      </div>
      <ReadAllEvent />
    </div>
  );
}
