import * as React from "react";
import NavBar from "../../Components/General/Navbar/NavBar";
import Footer from "../../Components/General/Footer/Footer";
import { useParams } from "react-router-dom";
import UpdateLogForm from "../../Components/Log/UpdateLogForm";

export default function LogUpdatePage() { // This component is the log update page
  const { id } = useParams(); // Take the id from the URL

  return (
    <>
      <div className="bg-nuit-etoile">
        <NavBar />
        <div className="p-5">
          <UpdateLogForm id={id} />
        </div>
        <Footer />
      </div>
    </>
  );
}
