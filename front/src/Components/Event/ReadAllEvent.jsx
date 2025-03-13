import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";
import Row from "react-bootstrap/Col";
import Col from "react-bootstrap/Col";
import DeleteButton from "../General/Tools/Button/DeleteButton";
import UpdateEvent from "./UpdateEvent";
import Date from "../General/Tools/Date";


export default function ReadAllEvent() {

  // Use the useLocation hook from React Router to get information about the current URL
  const location = useLocation();
  console.log(location);

  // State to store the list of events and loading status
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch event data from the backend
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/event", {   //call the symfony page that control the display of all event
        method: "GET",
        mode: "cors",
      });

      // If the response is not ok, throw an error
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      // If the response is ok, store the data in the events state by parsing the response JSON
      const data = await response.json();
      setEvents(data);
      setLoading(false);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des informations :",
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
      {loading ? (    //display a loading symbol during the fetching of the elements
        <div className="row">
          <div className="col-5">{/* none */}</div>
          <div className="col-2 ps-5 ms-md-5 my-md-5">
            <div className="dots"></div>
          </div>
          <div className="col-5"></div>
        </div>
      ) : (
        <div>
          <Row>
            {events.map((event) => ( //react's for loop
              <div className="m-md-5">
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center">
                    <Card.Title>{event.title}</Card.Title>
                  </Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <div className="d-flex justify content center">
                        <Col md={3} className="me-3">
                          <Card.Img src={event.picture}></Card.Img>
                        </Col>
                        <Card.Text>{event.description}</Card.Text>
                      </div>
                    </blockquote>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <div className="d-flex"><p>{Date(event.date)}</p></div>
                    <div className="d-flex">
                      {location.pathname === "/event" ? ( // if the location is /event, display the button to book the event else display the update and delete buttons
                        <Button className="btn background-yellow-hexagone mb-2">
                          S'inscrire
                        </Button>
                      ) : (
                        <>
                          <UpdateEvent id={event.id} />
                          <DeleteButton
                            id={event.id}
                            route={"event/delete"}
                            reload={fetchData}
                          />
                        </>
                      )}
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
}
