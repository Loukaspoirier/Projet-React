import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../General/Tools/Button/Button";

export default function RoleManagementUpdate(props) { // This component is used to update a role
  const navigate = useNavigate();

  const redirect = () => {
    navigate(`/role-management/update/${props.id}`);
  };

  return (
    <div>
      <Button onClick={redirect} description="Modifier" type="button" />
    </div> 
  );
}
