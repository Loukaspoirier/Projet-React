import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../../Components/General/Navbar/NavBar";
import ReadShop from "../../Components/Shop/ReadShop";
import Footer from "../../Components/General/Footer/Footer";

export default function (){
    const { id } = useParams(); //put the id on the url on a constant to use it
    return(
        <div>
            <NavBar/>
            <ReadShop id={id}/>
            <Footer/>
        </div>
    )
}