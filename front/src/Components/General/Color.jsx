import React, { useEffect, useState } from "react";

export default function Color() {
  const [backgroundColor, setBackgroundColor] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://localhost:8000/generate-color-json",
          {
            method: "GET",
            mode: "cors", // Ajoutez cette ligne
          },
        );
        if (!response.ok) {
          throw new Error(`Erreur de réseau: ${response.status}`);
        }

        const data = await response.json();
        setBackgroundColor(data.color);
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
    <div>
      <button
        style={{
          backgroundColor: backgroundColor,
          padding: "10px",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => alert("Bouton cliqué !")}
        disabled={!backgroundColor}
      >
        Cliquez ici avec la couleur
      </button>
    </div>
  );
}
