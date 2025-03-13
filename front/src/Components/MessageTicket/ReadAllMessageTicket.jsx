import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import MessageTicketUpdate from "./MessageTicketUpdate";
import { useParams } from "react-router-dom";
import DeleteButton from "../General/Tools/Button/DeleteButton";

export default function ReadAllMessageTickets() {
  const [messageTickets, setMessageTickets] = useState([]);
  const [newMessageTickets, setNewMessageTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id, back } = useParams();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/ticket/message", {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      const data = await response.json();
      setMessageTickets(data);
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

  useEffect(() => {
    const filteredMessages = messageTickets.filter(
      (message) => message.ticket == id,
    );
    setNewMessageTickets(filteredMessages);
  }, [messageTickets, id]);

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
        <div className="row">
          <div className="col-md-2">{/* None */}</div>
          <div className="col-md">
            {newMessageTickets.map((message) => (
              <div class="m-md-5">
                <Card>
                  <Card.Header className="d-flex justify-content-between align-items-center"></Card.Header>
                  <Card.Body>
                    <blockquote className="blockquote mb-0">
                      <p>
                        {message.content}
                        <br />
                        <div className="yellow-hexagone">{message.email}</div>
                      </p>
                    </blockquote>
                  </Card.Body>
                  <Card.Footer className="d-flex justify-content-center">
                    <div className="d-flex">
                      {back ? (
                        <>
                          <MessageTicketUpdate
                            messageId={message.id}
                            ticketId={message.ticket}
                          />
                          <DeleteButton
                            id={message.id}
                            route={"ticket/message/delete"}
                            reload={fetchData}
                          />{" "}
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </Card.Footer>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
