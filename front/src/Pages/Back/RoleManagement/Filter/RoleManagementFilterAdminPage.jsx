import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import RedirectButton from "../../../../Components/General/Tools/Button/RedirectButton";
import RoleManagementFilterAdmin from "../../../../Components/Back/RoleManagement/Filter/RoleManagementFilterAdmin";
import BackNavBar from "../../../../Components/Back/BackNavBar";

export default function RoleManagementFilterAdminPage() { // This component is the role management page for the admin interface with a filter for the role "admin"
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
      <BackNavBar />
      <div className="bg-line-2 container-fluid mt-5">
        <div className="d-flex">
          <Dropdown>
            <DropdownToggle className="background-yellow-hexagone purple-hexagone" id={"dropdown-button-drop-up"} drop={"up"}>
              Rôles
            </DropdownToggle>
            <Dropdown.Menu className={"bg-footer"}>
              <Dropdown.Item onClick={() => handleNavigation("admin")} style={{ color: "#FFD200" }}>
                Administrateur
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigation("modo")} style={{ color: "#FFD200" }}>
                Modérateur
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigation("adherent")} style={{ color: "#FFD200" }}>
                Adhérant
              </Dropdown.Item>
              <Dropdown.Item onClick={() => handleNavigation("visitor")} style={{ color: "#FFD200" }}>
                Visiteur
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <RedirectButton link="/role-management" description="Retirer le filtre"/> {/* Button to remove the filter */}
        </div>
        <RoleManagementFilterAdmin />
      </div>
    </>
  );
}
