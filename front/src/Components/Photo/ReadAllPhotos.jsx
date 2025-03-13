import React, { useEffect, useState } from "react";
import BackPhotoCard from "../Back/Photo/BackPhotoCard";

export default function ReadAllPhotos() {
  // State variables for storing photo data and loading status
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to reload data
  const reload = () => {
    fetchData();
  };

  // Function to fetch data from the backend server
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/photo", {
        method: "GET",
        mode: "cors",
      });
      if (!response.ok) {
        throw new Error(`Network error: ${response.status}`);
      }

      const data = await response.json();
      setPhotos(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching photos:", error.message);
      setLoading(false);
    }
  };

  // Effect hook to fetch data when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Rendering photo cards based on fetched data
  let photoCards = [];
  for (let i = 0; i < photos.length; i++) {
    photoCards.push(
      <div className="d-flex justify-content-center" style={{ margin: "10px" }}>
        <BackPhotoCard
          id={photos[i].id}
          title={photos[i].title}
          description={photos[i].description}
          image={photos[i].image}
          reload={reload}
        />
      </div>,
    );
  }

  // Rendering loading spinner if data is still loading, otherwise rendering photo cards
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
        <div className="d-flex flex-wrap justify-content-center">
          {photoCards}
        </div>
      )}
    </div>
  );
}
