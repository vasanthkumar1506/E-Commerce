import React from "react";
import "./Project.css";
import shopperMartLogo from './Images/shopperMartLogo.jpg';

function Heading(){
    
return(
    <>
    <img class = "logo" src={shopperMartLogo} alt="Logo"></img> 
    <span class = "header"><h1>Indian Mart</h1></span> 
    </>
)
} export default Heading;