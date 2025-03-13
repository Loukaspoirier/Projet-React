import Card from "react-bootstrap/Card";
import React, { useEffect, useState } from "react";
import UpdateShop from "./UpdateShop";
import DeleteButton from "../General/Tools/Button/DeleteButton";
import { useLocation } from "react-router-dom";
import RedirectButton from "../General/Tools/Button/RedirectButton";
import Row from "react-bootstrap/esm/Row";




export default function ReadAllShop() {

  // Use the useLocation hook from React Router to get information about the current URL
  const location = useLocation();

  // State to store the list of shops and loading status
  const [shops, setShops] = useState([]);
  const [loading, setLoading] = useState(false);

  // Function to fetch shop data from the backend
  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("/shop", {   //call the symfony page that control the display of all product in the shop
        method: "GET",
        mode: "cors",
      });

      // If the response is not ok, throw an error
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      // If the response is ok, store the data in the shops state by parsing the response JSON
      const data = await response.json();
      setShops(data);
      setLoading(false);
    } catch (error) {
      console.error(
        "Erreur lors de la récupération des articles :",
        error.message,
      );
      setLoading(false);
    }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? (    //a loading symbol during the callback 
        <div className="row">
          <div className="col-5">{/* none */}</div>
          <div className="col-2 ps-5 ms-md-5 my-md-5">
            <div className="dots"></div>
          </div>
          <div className="col-5"></div>
        </div>
      ) : (
        <Row>
          <div className="col-lg-1"></div>
          <div className="col-lg-10 d-flex flex-wrap justify-content-center">
            {shops.map((product) => (             //react's for loop, for displaying all elements
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.picture} />
                <Card.Body>
                  <Card.Title>{product.title} - {product.price} €</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                </Card.Body>
                <Card.Footer className="d-flex justify-content-between">
                  <div className="d-flex">
                    {location.pathname === "/shop" ? ( // If the current URL is /shop, display a "Voir plus" button else display an "Update" and "Delete" button
                      <RedirectButton
                        link={"/shop/read/" + product.id}  //add the id of the product at the url
                        description="Voir plus"
                      />
                    ) : (
                      <div>
                        <UpdateShop id={product.id} />
                        <DeleteButton
                          id={product.id}
                          route={"shop/delete"}
                          reload={fetchData}
                        />
                      </div>
                    )}
                  </div>
                </Card.Footer>
              </Card>
            ))}
          </div>
        </Row>
      )}
    </div>
  );
}
