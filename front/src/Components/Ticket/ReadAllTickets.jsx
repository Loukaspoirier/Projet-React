import React, { useEffect, useState } from "react";
import UpdateTicket from "./UpdateTicket";
import Card from "react-bootstrap/Card";
import BadgeStatus from "./BadgeStatus";
import RedirectButton from "../General/Tools/Button/RedirectButton";
import DeleteButton from "../General/Tools/Button/DeleteButton";
import Button from "../General/Tools/Button/Button";

export default function ReadAllTickets(props) {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false); // for the spinner
  const [searchInput, setSearchInput] = useState("");//wait for changement
  const [searchQuery, setSearchQuery] = useState("");//wait for submit

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/ticket", {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }
      const data = await response.json();
      setTickets(data);
      setLoading(false);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des tickets :",
        error.message,
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  const filteredData = tickets.filter(
    (ticket) =>
      ticket.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ticket.email.toLowerCase().includes(searchQuery.toLowerCase()),
  );

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
        <div>
          <div className="m-md-5">
            <form className="d-flex" onSubmit={handleSearchFormSubmit}>
              <input
                name="search"
                className="form-control me-2"
                type="search"
                placeholder="Rechercher"
                aria-label="Search"
                value={searchInput}
                onChange={handleSearchInputChange}
              />
              <Button name="search" type="submit" description="Rechercher" />
            </form>
          </div>
          {filteredData.map((ticket) => (
            <div className="m-md-5 py-3" key={ticket.id}>
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
                      <div className="purple-hexagone opacity-75">
                        {ticket.email}
                      </div>
                    </p>
                  </blockquote>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-center">
                  <div className="d-flex">
                    <div className="d-flex">
                      {props.back ? (
                        <RedirectButton
                          link={`/back/ticket/read/${ticket.id}/${props.back}`}
                          description="Lire le(s) réponse(s)"
                        />
                      ) : (
                        <RedirectButton
                          link={"/ticket/read/" + ticket.id}
                          description="Lire le(s) réponse(s)"
                        />
                      )}
                      {ticket.email === localStorage.getItem("email") ||
                        (localStorage.getItem("roles") === "ROLE_ADMIN" &&
                          props.back) ||
                        (localStorage.getItem("roles") === "ROLE_MODO" &&
                          props.back) ? (
                        <>
                          {props.back ? (
                            <div className="mx-md-2">
                              <UpdateTicket id={ticket.id} back="1" />
                            </div>
                          ) : (
                            <div className="mx-md-2">
                              <UpdateTicket id={ticket.id} />
                            </div>
                          )}
                          <DeleteButton
                            id={ticket.id}
                            route={"ticket/delete"}
                            reload={fetchData}
                          />
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </Card.Footer>
              </Card>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
