import React, { useState, useEffect } from "react";
import Button from "./Tools/Button/RedirectButton";

export default function SearchBar() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const fetchData = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(`/ticket?search=${query}`, {
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
        "Erreur lors de la récupération de la couleur :",
        error.message,
      );
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(searchQuery);
  }, [searchQuery]);

  const filteredData = tickets.filter((ticket) =>
    ticket.content.toLowerCase().includes(searchQuery.toLowerCase()),
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
        <div className="container">
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Rechercher"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button description="Recherche" type="submit" />
          </form>
          {/* {filteredData.map(ticket => (
                <div className="ticket" key={ticket.id}>
                    <div>{ticket.title}</div>
                    <div>{ticket.content}</div>
                </div>
            ))} */}
        </div>
      )}
    </div>
  );
}
