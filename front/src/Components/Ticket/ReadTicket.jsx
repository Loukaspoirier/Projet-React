import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import UpdateTicket from "./UpdateTicket";
import BadgeStatus from "./BadgeStatus";
import { useParams } from "react-router-dom";

export default function ReadTickets(props) {
  const [ticket, setTicket] = useState([]);
  const [loading, setLoading] = useState(false);
  const { back } = useParams(); //when back is on the url this mean that  we are coming from update ticket so we need to refresh the page in order to see the changes

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/ticket/read/" + props.id, {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      const data = await response.json();
      setTicket(data);
      setLoading(false);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de la couleur :",
        error.message,
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="row">
          <div className="col-5">{/* none */}</div>
          <div className="col-2 ps-5 ms-md-5 my-md-5">
            <div className="dots"></div>
            <div className="col-5"></div>
          </div>
        </div>
      ) : (
        //the second part of the ternary operator display the tickets
        <div>
          <div className="m-md-5">
            <Card>
              <Card.Header className="d-flex justify-content-between align-items-center">
                <h3 className="purple-hexagone">{ticket.title}</h3>
                <span>
                  <BadgeStatus status={ticket.status} />
                </span>
              </Card.Header>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>
                    {ticket.content}
                    <br />
                    <div className="purple-hexagone">{ticket.email}</div>
                  </p>
                </blockquote>
              </Card.Body>
              <Card.Footer className="d-flex justify-content-center">
                <div className="d-flex">
                  {/* the ternary  expression is here to give the update button to the super user and allow the update and denied the update of the original author */}
                  {ticket.email === localStorage.getItem("email") ? (
                    <UpdateTicket id={ticket.id} back={back} />
                  ) : (
                    ""
                  )}
                </div>
              </Card.Footer>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}
