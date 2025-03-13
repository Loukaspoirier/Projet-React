import React from "react";
import RoleManagement from "../../../Components/Back/RoleManagement/RoleManagement";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import BackNavBar from "../../../Components/Back/BackNavBar";

export default function RoleManagementPage() { // This component is the role management page for the admin interface without a filter
  const navigate = useNavigate();

  // Function to handle the navigation
  function handleNavigation(role) {
    switch (role) {
      case "admin":
        navigate("/role-management/role-admin");
        break;
      case "modo":
        navigate("/role-management/role-modo");
        break;
      case "adherent":
        navigate("/role-management/role-adherent");
        break;
      case "visitor":
        navigate("/role-management/role-visitor");
        break; 
      default:
        navigate("/role-management"); // Default value
    }
  }

  return (
    <>
      <div className="bg-line-2 container-fluid p-0">
        <BackNavBar />
        <div className="p-4">
          <Dropdown>
            <DropdownToggle className="background-yellow-hexagone purple-hexagone" id={"dropdown-button-drop-up"} drop={"up"}>
              Rôles
            </DropdownToggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleNavigation("admin")} style={{ color: "#FFD200" }}>
                Administrateur
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigation("modo")} style={{ color: "#FFD200" }}>
                Modérateur
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigation("adherent")}style={{ color: "#FFD200" }}>
                Adhérant
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigation("visitor")} style={{ color: "#FFD200" }}>
                Visiteur
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="color-text">
          <RoleManagement />
        </div>
      </div>
    </>
  );
}
