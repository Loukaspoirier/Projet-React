import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Like from "../General/Tools/Button/Like";
import Sondage from "../General/Tools/Button/Sondage";

export default function ReadAllActivities(props) {
  // Define state variables for activities, loading status, and search query.
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const id = localStorage.getItem("id");

  // Define a function to get the type of a given data.
  function getTypeOfData(data) {
    return typeof data;
  }

  // Define an asynchronous function to fetch data from the '/activity' endpoint.
  const fetchData = async () => {
    try {
      setLoading(false);
      const response = await fetch("/activity", {
        method: "GET",
        mode: "cors",
      });

      // Throw an error if the response is not ok.
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      // Parse the response data as JSON.
      const data = await response.json();

      // Map over the data and modify it based on certain conditions.
      setActivities(
        data.map((prevActivity) => {
          // If 'yes' is an object, set 'yes' and 'no' to 0.
          if (getTypeOfData(prevActivity.yes) == "object") {
            prevActivity.yes = 0;
            prevActivity.no = 0;
          } else if (prevActivity.yes == 0 && prevActivity.no == 0) {
            // If 'yes' and 'no' are both 0, keep them as 0.
            prevActivity.yes = 0;
            prevActivity.no = 0;
          } else {
            // Otherwise, calculate the average and percentages.
            var moyenne = prevActivity.yes + prevActivity.no;
            var pourcentageYes = (prevActivity.yes / moyenne) * 100;
            var pourcentageNo = (prevActivity.no / moyenne) * 100;
            prevActivity.yes = pourcentageYes;
            prevActivity.no = pourcentageNo;
          }

          // If 'listLikes' has at least one item, check if it includes 'id'.
          if (prevActivity.listLikes.length >= 1) {
            if (prevActivity.listLikes.includes(id) == true) {
              console.log("c'est id");
              prevActivity.listLikes = 1;
            } else {
              prevActivity.listLikes = 0;
            }
          } else {
            prevActivity.listLikes = 0;
          }
          return prevActivity;
        })
      );

      // Set the activities state variable to the fetched data.
      setActivities(data);
      setLoading(false);
    } catch (error) {
      // Log any errors that occur during the fetch.
      console.error(
        "Erreur lors de la récupération de la donnée :",
        error.message
      );
      setLoading(false);
    }
  };

  // Use the useEffect hook to fetch data when the component mounts or the search query changes.
  useEffect(() => {
    fetchData(searchQuery);
  }, [searchQuery]);

  // Filter the activities based on the search query.
  const filteredData = activities.filter((activity) =>
    activity.description.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log(activities);

  // Render the component.
  return (
    <div>
      {loading ? (
        // If loading, render a loading indicator.
        <div className="row">
          <div className="col-5">{/* none */}</div>
          <div className="col-2 ps-5 ms-md-5 my-md-5">
            <div className="dots"></div>
            <div className="col-5"></div>
          </div>
        </div>
      ) : (
        // If not loading, render the activities.
        <div>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Rechercher"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
          <div>
            {filteredData.map((activity) => (
              <div>
                <Card className="my-5">
                  <Card.Body>
                    {/* <h2>{community.date}</h2> */}
                    <Card.Text>
                      {activity.listLikes}
                      <br />

                      {activity.description}
                      <br />
                    </Card.Text>
                    <h2>{activity.question}</h2>
                    <div className="row">
                      <div className="col-6">
                        <div className="d-inline">
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="d-flex flex-row-reverse">
                          <Like
                            id={activity.id}
                            likes={activity.likes}
                            idFormData={activity.listLikes}
                            reload={fetchData}
                          />
                          {activity.question.length >= 1 ? (
                            <div>
                              <Sondage
                                id={activity.id}
                                no={activity.no}
                                reload={fetchData}
                                yes={activity.yes}
                                sondages={activity.sondage}
                              />
                            </div>
                          ) : (
                            <h2>{activity.question}</h2>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
