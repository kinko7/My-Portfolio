import React from "react";
import Recontact from "../Recontact";


import "../Home/home.css";

export default function Home() {


  return (
    <div className="container">
      <nav className="nav-main">
        {/* <img src=""> */}
        <span className="nav-brand">PORTFOLIO</span>
        <ul className="nav-menu">
         <Recontact/>
        </ul>
      </nav>
      <hr></hr>
      
      <header className="showcase">
        {/* <div className="show">


  
    
       
  <h1>I´M CARLOS MARLETA</h1>
   
 
 
  <strong>FULLSTACK BACKEND DEVELOPER</strong>
  </div> */}
      </header>
    </div>
  );
}
