import * as React from "react";
import BackNavBar from "../../../../Components/Back/BackNavBar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import { useNavigate } from "react-router-dom";
import ReadAllLogFilterAdmin from "../../../../Components/Back/Log/Filter/ReadAllLogFilterAdmin";
import RedirectButton from "../../../../Components/General/Tools/Button/RedirectButton";
import "../../../../index.css";

export default function BackLogPageFilterAdmin() { // This component is the log page for the admin interface with a filter for the role "admin"
  const navigate = useNavigate();

  // Function to handle the navigation
  function handleNavigation(role) {
    switch (role) {
      case "admin":
        navigate("/log/read-all/admin");
        break;
      case "modo":
        navigate("/log/read-all/modo");
        break;
      case "adherent":
        navigate("/log/read-all/adherent");
        break;
      case "visitor":
        navigate("/log/read-all/visitor");
        break;
      default:
        navigate("/log/read-all"); // Default value
    }
  }
  return (
    <div className="bg-line-4">
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
            <Dropdown.Item onClick={() => handleNavigation("adherent")} style={{ color: "#FFD200" }}>
              Adhérant
            </Dropdown.Item>
            <Dropdown.Item onClick={() => handleNavigation("visitor")} style={{ color: "#FFD200" }}>
              Visiteur
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <RedirectButton link="/log/read-all" description="Retirer le filtre" /> {/* Button to remove the filter */}
      </div>
      <ReadAllLogFilterAdmin />
    </div>
  );
}
