import * as React from "react";
import BackNavBar from "../../../Components/Back/BackNavBar";
import RedirectButton from "../../../Components/General/Tools/Button/RedirectButton";
import ReadAllShop from "../../../Components/Shop/ReadAllShop";

export default function ShopBackPage() {
  // Return the back office shop page with a navigation bar, a button to add a new article and the list of all the articles
  return (
    <div>
      <BackNavBar />
      <div className="p-3">
        <RedirectButton
          link="/shop/back/form"
          description="Ajouter un article"
        />
      </div>
      <ReadAllShop />
    </div>
  );
}
