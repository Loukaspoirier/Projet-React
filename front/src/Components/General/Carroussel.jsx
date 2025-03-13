import Slide from "./Slide";
import React, { useEffect, useState } from "react";

export default function Carroussel() {
  const [slides, setSlides] = useState([]);
  const [activeItem] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://Localhost:8000/", {
          method: "GET",
          mode: "cors", // Ajoutez cette ligne
        });
        if (!response.ok) {
          throw new Error(`Erreur de réseau: ${response.status}`);
        }

        const data = await response.json();
        setSlides(data);
      } catch (error) {
        console.error(
          "Erreur lors tous cours :",
          error.message,
        );
      }
    };

    fetchData();
  }, []);
  console.log("C'est le tournoi  ");

  return (
    <div id="carouselExampleIndicators" className="carousel slide container">
      <div className="row">
        <div className="col-lg-6">
          <h1 className="bg-white color-text">Les 3 derniers évènements du BDE</h1>
        </div>
      </div>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active turn"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
          className="turn"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
          className="turn"
        ></button>
      </div>
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${activeItem === index ? "active" : ""}`}
          >
            <Slide image={slides[index]["picture"]} title={slides[index]["title"]} />


          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}