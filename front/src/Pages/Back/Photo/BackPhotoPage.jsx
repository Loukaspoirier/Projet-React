import * as React from "react";
import BackNavBar from "../../../Components/Back/BackNavBar";
import RedirectButton from "../../../Components/General/Tools/Button/RedirectButton";
import ReadAllPhotos from "../../../Components/Photo/ReadAllPhotos";
import "../../../index.css";

export default function BackPhotoPage() {
  return (
    <div className="bg-line-7">
      {/* Rendering the BackNavBar component */}
      <BackNavBar />

      {/* Rendering the RedirectButton component for creating a new photo */}
      <RedirectButton link="/photo/create" description="Créer" />
      <br />
      <br />

      {/* Rendering the ReadAllPhotos component to display all photos */}
      <ReadAllPhotos />
    </div>
  );
}
