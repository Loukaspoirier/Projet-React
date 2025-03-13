import React, { useEffect, useState } from "react";
import EventForm from "./EventForm";
import DeleteEvent from "./DeleteEvent";
import UpdateEvent from "./UpdateEvent";

export default function ReadEvent(props) {

  // using the state to store the product and loading
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(false);

  // Create a function to fetch the data from the backend
  const fetchData = async () => {
    try {
      // set loading to true before the data is fetched
      setLoading(true);
      const response = await fetch("/event/read/" + props.id, {
        method: "GET",
        mode: "cors",
      });
      // check if the response is ok
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      // store the data in the product state by parsing the response JSON
      const data = await response.json();
      setEvent(data);

      // set loading to false after the data is fetched
      setLoading(false);

    // catch and log any errors during the process
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de la couleur :",
        error.message,
      );
      setLoading(false);
    }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="row">
          <div className="col-6">{/* none */}</div>
          <div className="col my-md-5">
            <div className="dots"></div>
          </div>
        </div>
      ) : (
        <div>
          <EventForm event={event} />
          <UpdateEvent id={props.id} />
          <DeleteEvent id={props.id} />
        </div>
      )}
    </div>
  );
}
