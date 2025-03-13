import * as React from "react";
import ShopUpdateForm from "../../Components/Shop/ShopUpdateForm";
import { useParams } from "react-router-dom";
import BackNavBar from "../../Components/Back/BackNavBar";

export default function ShopUpdatePage() {

  // Use the useParams hook to get the id from the URL
  const { id } = useParams();

  // Pass the id to the ShopUpdateForm component to make us update the correct item
  return (
    <div>
      <BackNavBar />
      <ShopUpdateForm id={id} />
    </div>
  );
}
