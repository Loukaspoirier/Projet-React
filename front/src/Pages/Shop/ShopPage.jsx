import * as React from "react";
import NavBar from "../../Components/General/Navbar/NavBar";
import ReadAllShop from "../../Components/Shop/ReadAllShop";
import Footer from "../../Components/General/Footer/Footer";

export default function ShopPage() {
  return (
    // using NavBar, ReadAllShop and footer components to make the front ShopPage 
    <div>
      <NavBar />
      <ReadAllShop/>
      <Footer/>
    </div>
  );
}
