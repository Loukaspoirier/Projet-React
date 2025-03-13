import * as React from "react";
import Navbar from "../../Components/General/Navbar/NavBar";
import ActivityUpdateForm from "../../Components/Activity/ActivityUpdateForm";
import { useParams } from "react-router-dom";

export default function UpdateActivityPage() {
  const { id } = useParams();
  return (
    <div className="bg-line-6">
      <Navbar />
      <div className="pt-3">
        <ActivityUpdateForm id={id} />
      </div>
    </div>
  );
}
