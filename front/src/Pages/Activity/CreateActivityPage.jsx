import * as React from "react";
import Navbar from "../../Components/General/Navbar/NavBar";
import ActivityForm from "../../Components/Activity/ActivityForm";

export default function CreateActivityPage() {
  return (
    <div className="bg-line-6">
      <Navbar />
      <ActivityForm />
    </div>
  );
}
