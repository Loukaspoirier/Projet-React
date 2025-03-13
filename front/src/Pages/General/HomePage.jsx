import React, { useState, useEffect } from 'react';
import NavBar from '../../Components/General/Navbar/NavBar';
import Carroussel from '../../Components/General/Carroussel';
import Footer from '../../Components/General/Footer/Footer';
import Firstname from '../../Components/Log/LocalStorage/Firstname';

export default function HomePage() {
  return (
    <div className="bg-spiral">
      <NavBar />
      <div className="my-5 main">
        <div className="container d-flex justify-content-start bg-white">
          <h3 className='color-text'>Bienvenue </h3>
          <div className="ps-2">
            <h3 className='color-text'><Firstname /></h3>
          </div>
        </div>
        <Carroussel />
      </div>
      <div className="footer-home container-fluid p-0">
        <Footer />
      </div>
    </div>
  );
}
