import * as React from "react";
import NavBar from "../../Components/General/Navbar/NavBar";
import Footer from "../../Components/General/Footer/Footer";
import { useParams } from "react-router-dom";
import UpdateLogFormAdmin from "../../Components/Log/UpdateLogFormAdmin";

export default function LogUpdateAdminPage() { // This component is the log update page for the admin interface
  const { id } = useParams(); // Take the id from the URL

  return (
    <>
      <div className="bg-nuit-etoile">
        <NavBar />
        <div className="p-5">
          <UpdateLogFormAdmin id={id} />
        </div>
        <Footer />
      </div>
    </>
  );
}
