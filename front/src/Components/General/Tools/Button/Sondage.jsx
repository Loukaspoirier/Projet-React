import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function Sondages(props) {
  const navigate = useNavigate();

  const formData = useState({
    yes: 0,
    no: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend(formData);
  };

  const sendDataToBackend = (data) => {
    if (props.id) {
      fetch("/activity/update/sondage/" + props.id, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          // ok message
          console.log("Réponse du serveur :", response);
          props.reload();
        })
        .catch((error) => {
          // error message
          console.error("Erreur lors de l'envoi des données :", error);
        });
      redirect();
    } else {
      fetch("/activity/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          // ok message
          console.log("Réponse du serveur :", response);
          props.reload();
        })
        .catch((error) => {
          // error message
          console.error("Erreur lors de l'envoi des données :", error);
        });
      redirect();
    }
  };

  function redirect() {
    navigate("/activity");
  }

  function addNotice(e) {
    if (e.target.id === "radioNo" && e.target.checked === true) {
      sendDataToBackend({ yes: 0, no: 1 });
    }
    if (e.target.id === "radioYes" && e.target.checked === true) {
      sendDataToBackend({ no: 0, yes: 1 });
    }
  }

    return (
        <Form onSubmit={handleSubmit} className="">
            <div>

                <div className="d-flex justify-content-around">
                    <div className="notice">
                        <div class="progress" style={{ width: "30px", height: "200px", transform: "rotate(180deg)" }} role="progressbar" aria-label="Warning example" aria-valuenow={props.no} aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-yellow-hexagone" style={{ width: "30px", height: props.no + "%", transform: "rotate(180deg)" }}>{props.no}%</div>
                        </div>
                        <Form.Check
                            inline
                            id="radioNo"
                            label="Non"
                            name="radio"
                            type="radio"
                            onChange={addNotice}
                        />
                    </div>
                    <div className="notice">
                        <div class="progress" style={{ width: "30px", height: "200px", transform: "rotate(180deg)" }} role="progressbar" aria-label="Warning example" aria-valuenow={props.yes} aria-valuemin="0" aria-valuemax="100">
                            <div class="progress-bar bg-yellow-hexagone" style={{ width: "30px", height: props.yes + "%", transform: "rotate(180deg)" }}>{props.yes}%</div>
                        </div>
                        <Form.Check
                            inline
                            id="radioYes"
                            label="Oui"
                            name="radio"
                            type="radio"
                            onClick={addNotice}
                        />
                    </div>
                </div>
            </div>
        </Form>
    );
}
