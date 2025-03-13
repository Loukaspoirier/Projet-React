import * as React from "react";
import RoleManagementUpdateForm from "../../../Components/Back/RoleManagement/RoleManagementUpdateForm";
import { useParams } from "react-router-dom";
import BackNavBar from "../../../Components/Back/BackNavBar";

export default function RoleManagementUpdatePage() { // This component is the role management update page for the admin interface
  const { id } = useParams(); // Take the id from the URL

  return (
    <>
      <div className="bg-nuit-etoile">
        <BackNavBar />
        <div className="py-5 my-5">
          {/* Give the id at RoleManagementUpdateForm  */}
          <RoleManagementUpdateForm id={id} />
        </div>
      </div>
    </>
  ); 
}
