import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";


export default function ReadShops(props) {

  // using the state to store the product and loading
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  // Create a function to fetch the data from the backend
  const fetchData = async () => {
    try {
      // set loading to true before the data is fetched
      setLoading(true);
      const response = await fetch("/shop/read/" + props.id, {  //we obtain the back's function that have the data of one exclusive product with the id in the URL
        method: "GET", 
        mode: "cors",
      });
      // check if the response is ok
      if (!response.ok) {
        throw new Error(`Erreur de réseau: ${response.status}`);
      }

      // store the data in the product state by parsing the response JSON
      const data = await response.json();
      setProduct(data);

      // set loading to false after the data is fetched
      setLoading(false);

      // catch and log any errors during the process
    } catch (error) {
      console.error(
        "Erreur lors de la récupération de la couleur :",
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
      {loading ? (                 //creation of a loading symbol during the obtention of the back
        <div className="row">
          <div className="col-5">{/* none */}</div>
          <div className="col-2 ps-5 ms-md-5 my-md-5">
            <div className="dots"></div>
          </div>
          <div className="col-5"></div>
        </div>
      ) : (<div><div className="d-flex raw"> {/*a colomn to center the element*/}
        <div className="d-flex col-3"></div>
        <div className="d-flex col-6">
          <Card>
            <Card.Img variant="top" src={product.picture} className="img-fluid" />  {/*a card made with the data from the database data*/ }
            <Card.Body>
              <Card.Title>{product.title} - {product.price} €</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button className="btn background-yellow-hexagone mb-2">
                Réserver
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="d-flex col-3"></div>
      </div>
      </div>
      )
      }
    </div >
  )
}

