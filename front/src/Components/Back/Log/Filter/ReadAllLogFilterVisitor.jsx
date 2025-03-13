import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import DeleteLog from "../../Log/DeleteLog";
import UpdateLogAdmin from "../../../Log/UpdateLogAdmin";
import Button from "../../../General/Tools/Button/Button";

export default function ReadAllLogFilterVisitor() { // This is a component to read all logs for all users
  const [signups, setSignups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState(""); // Create a state to store the search input
  const [searchQuery, setSearchQuery] = useState(""); // Create a state to store the search query

  const fetchData = async () => { // Create a function to fetch the signups
    try {
      setLoading(true);
      const response = await fetch("/log/read-all/visitor", {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      const data = await response.json();
      setSignups(data);
      setLoading(false);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des roles :",
        error.message,
      );
      setLoading(false);
    }
  };

  useEffect(() => { // Create a side effect to fetch the signups
    fetchData();
  }, []);

  const handleSearchInputChange = (e) => { // Create a function to handle the search input change
    setSearchInput(e.target.value);
  };

  const handleSearchFormSubmit = (e) => { // Create a function to handle the search form submit
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  const filteredData = signups.filter( // Create a variable to store the filtered data
    (signup) =>
      signup.userfirstname.toLowerCase().includes(searchQuery.toLowerCase()) || // Filter the data by userfirstname
      signup.userlastname.toLowerCase().includes(searchQuery.toLowerCase()) // Filter the data by userlastname
  );

  return (
    <div>
      {loading ? ( // If the data is loading, render a loading spiner
        <div className="row">
          <div className="col-5">{/* none */}</div>
          <div className="col-2 ps-5 ms-md-5 my-md-5">
            <div className="dots"></div>
            <div className="col-5"></div>
          </div>
        </div>
      ) : ( // If the data is loaded, render the signups
        <>
          <div className="p-5">
            <form className="d-flex" onSubmit={handleSearchFormSubmit}> {/* Search bar */}
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
          <Row>
            <div className="col-lg-1"></div>
            <div className="col-lg-10 d-flex flex-wrap justify-content-center">
              {filteredData.map((signup) => ( // Map the signups to render them                  
                <div className="pt-1" key={signup.id}>
                  <div className="p-5">
                    <Card className="color-text border-hexa rounded-4">
                      <Card.Body className="px-5">
                        <blockquote className="blockquote mb-0">
                          <p>{signup.userfirstname}</p>
                        </blockquote>
                        <blockquote className="blockquote mb-0">
                          <p>{signup.userlastname}</p>
                        </blockquote>
                        <blockquote className="blockquote mb-0">
                          <p>{signup.email}</p>
                        </blockquote>
                        <blockquote className="blockquote mb-0">
                          <p>{signup.roles}</p>
                        </blockquote>
                      </Card.Body>
                      <Card.Footer className="d-flex justify-content-center">
                        <div className="d-flex justify-content-evenly">
                          <UpdateLogAdmin id={signup.id} />
                          {String(localStorage.getItem("id")) === String(signup.id) ? ( // If the user is the author of the log, render an empty string
                            ""
                          ) : ( // If the user is not the author of the log, render the DeleteLog component
                            <DeleteLog id={signup.id} />
                          )}
                        </div>
                      </Card.Footer>
                    </Card>
                  </div>
                </div>
              ))}
              <div className="col-lg-auto"></div>
            </div>

          </Row>
        </>
      )}
    </div>
  );
}
