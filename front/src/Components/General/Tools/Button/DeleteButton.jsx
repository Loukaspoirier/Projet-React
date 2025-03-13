import React, { useState } from "react";
import Button from "./Button";

export default function DeleteButton(props) {
  const [clicked, setClicked] = useState(false);

  function confirmDelete() {
    // Mettre à jour l'état pour changer le label du bouton
    setClicked(true);

    fetch(`/${props.route}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.id),
    })
      .then((response) => {
        props.reload();
      })
      .catch((error) => {
        // En cas d'erreur, rétablir l'état à false pour permettre une nouvelle tentative
        setClicked(false);
        console.error(
          "Une erreur s'est produite lors de la suppression :",
          error,
        );
      });
  }

  return (
    <Button
      onClick={confirmDelete}
      description={
        clicked ? (
          <div className="dots-mini m-2"></div>
        ) : props.description ? (
          props.description
        ) : (
          "Supprimer"
        )
      }
      type="button"
    />
  );
}
