import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useNavigate } from "react-router-dom";
import "../../../index.css";
import Button from "../../General/Tools/Button/Button";
import DisabledButton from "../../General/Tools/Button/DisableButton";

export default function RoleManagementUpdateForm(props) { // This component is used to update a role
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ // This state is used to store the form data
    roles: "",
  });

  const transformStringToArray = (str) => { // This function is used to transform a string into an array
    try {
      // is valid JSON?
      JSON.parse(str.trim()); 
      // if valid JSON, return it as an array
      return str.trim();
    } catch (error) {
      // else return the string as an array
      return str.trim() === "" ? [] : [str.trim()];
    }
  };

  // function to update the value of the form when it changes
  const handleChange = (e) => {
    const { value } = e.target;
    const transformedValue = value ? transformStringToArray(value) : []; // Utilisez la fonction transformStringToArray uniquement si la valeur n'est pas vide
    setFormData((prevState) => ({
      ...prevState,
      roles: transformedValue,
    }));
  };

  // function to send data to the backend
  const sendDataToBackend = async (data) => {
    try {
      // Check if roles is empty
      if (data.roles.length === 0) {
        console.log(
          "Aucun rôle sélectionné. Les données ne sont pas envoyées au backend.",
        );
        return;
      }

      const response = await fetch(`/role-management/update/${props.id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error(`Erreur lors de la requête : ${response.status}`);
      }
      navigate("/role-management");
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };

  // send data to the backend if all checks pass
  const handleSubmit = (e) => {
    e.preventDefault();
    sendDataToBackend(formData);
  };

  useEffect(() => { // This effect is used to update the form data when the id changes
  }, [props.id]);
  return (
    <>
      <Row>
        <div className="col-4"></div>
        <div className="col-lg-4 px-5">
          <Form onSubmit={handleSubmit} className="rounded-4 border-hexa p-3">
            <Row className="mt-3">
              <Form.Group md="auto" controlId="validRoles">
                <Form.Label className="color-text">Rôles</Form.Label>
                <Form.Select onChange={handleChange} value={formData.roles}> {/* Use the handleChange function to update the form data */}
                  <option value={"NotSelect"}>Sélectionnez un rôle</option>
                  <option value={"ROLE_ADMIN"}>Admin</option>
                  <option value={"ROLE_MODO"}>Modo</option>
                  <option value={"ROLE_ADHERENT"}>Adhérant</option>
                  <option value={"ROLE_VISITOR"}>Visiteur</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <div className="pt-3 d-flex justify-content-center">
              {formData.roles[0] === "NotSelect" || formData.roles === "" ? ( // If the form is not filled, render a disabled button
                <DisabledButton type="submit" description="Valider" />
              ) : ( // If the form is filled, render a button
                <Button type="submit" description="Valider" />
              )}
            </div>
          </Form>
        </div>
        <div className="col-4"></div>
      </Row>
    </>
  );
}
