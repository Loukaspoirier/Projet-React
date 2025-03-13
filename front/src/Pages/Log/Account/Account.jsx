import * as React from "react";
import "../../../index.css";
import Footer from "../../../Components/General/Footer/Footer";
import ReadLog from "../../../Components/Log/ReadLog";
import NavBar from "../../../Components/General/Navbar/NavBar";

export default function Account() { // This component is the account page
  return (
    <>
      <div className="bg-round-1 m-0 p-0 container-fluid">
        <NavBar />
        <ReadLog />
        <div className="container-fluid p-0">
          <Footer />
        </div>
      </div>
    </>
  );
}
