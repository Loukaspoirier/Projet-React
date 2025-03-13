import * as React from "react";
import BackNavBar from "../../Components/Back/BackNavBar";
import ShopForm from "../../Components/Shop/ShopForm";

export default function ShopFormPage() {
  // using NavBar and ShopForm components to make the ShopFormPage
  return (
    <div>
      <BackNavBar />
         <ShopForm />
    </div>
  );
}
