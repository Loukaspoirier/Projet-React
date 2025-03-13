import CheckExample from "./CheckboxExemple";
import "../index.css";
import BadgeStatus from "./BadgeStatus";
import React, { useEffect, useState } from "react";

export default function Table() {
  /* const [tickets, setTickets] = useState([]);
  useEffect(() => {
    const getTicketsData = async () => {
      const reqData = await fetch('https://localhost:8000/ticket')
      const resData = await reqData.json();
      console.log(resData);
      setTickets(tickets);
    }
    getTicketsData();
  }, []); */

  // State to store the tickets data
  const [tickets, setTickets] = useState([]);

  // Function to fetch ticket data from the backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/ticket", {
          method: "GET",
          mode: "cors",
        });
        // If the response is not ok, throw an error 
        if (!response.ok) {
          throw new Error(`Erreur de réseau: ${response.status}`);
        }

        // If the response is ok, store the data in the tickets state by parsing the response JSON
        const data = await response.json();
        data.forEach((elements) => setTickets(data));
      } catch (error) {
        console.error(
          "Erreur lors de la récupération de la couleur :",
          error.message,
        );
      }
    };

    fetchData();
  }, []);
  return (
    <div className="mt-5 d-flex justify-content-center">
      <table className="table table-color rounded-5 overflow-hidden">
        <thead>
          <tr className="table-primary">
            <th>N°</th>
            <th>Select</th>
            <th>Status</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <CheckExample />
              </td>
              <td>
                <BadgeStatus bg={ticket.badge} statut={ticket.status} />
              </td>
              <td>{ticket.email}</td>
              <td>{ticket.title}</td>
              <td>DD/MM/YYYY</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
