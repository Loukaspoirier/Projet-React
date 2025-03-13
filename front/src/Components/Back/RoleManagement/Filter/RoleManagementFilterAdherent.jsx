import React, { useEffect, useState } from "react";
import RoleManagementUpdate from "../RoleManagementUpdate";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/esm/Row";
import Button from "../../../General/Tools/Button/Button";

export default function RoleManagementFilterAdherent() { // This is a component to read all roles for adherent users
  const [signups, setSignups] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState(""); // Create a state to store the search input
  const [searchQuery, setSearchQuery] = useState(""); // Create a state to store the search query
 
  const fetchData = async () => { // Create a function to fetch the signups
    try {
      setLoading(true);
      const response = await fetch("/role-management/role-adherent", {
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
          <div className="col-6">{/* none */}</div>
          <div className="col my-md-5">
            <div className="dots"></div>
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
            <div className="col-1"></div>
            <div className="col-10 d-flex flex-wrap justify-content-center">
              {filteredData.map((signup) => ( // Map the signups to render them
                <div className="p-5">
                  <Card className="color-text border-hexa rounded-4">
                    <Card.Header className="d-flex justify-content-start align-items-center">
                      <p>
                        {signup.userfirstname} {signup.userlastname}
                      </p>
                    </Card.Header>
                    <Card.Body>
                      <blockquote className="blockquote pb-0">
                        <p>{signup.roles}</p>
                      </blockquote>
                    </Card.Body>
                    <Card.Footer className="d-flex justify-content-center">
                      <div className="d-flex justify-content-evenly">
                        <RoleManagementUpdate id={signup.id} />
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              ))}
            </div>
            <div className="col"></div>
          </Row>
        </>
      )}
    </div>
  );
}
