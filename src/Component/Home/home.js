import React from "react";
import Recontact from "../Recontact";
import "../Home/home.css";

export default function Home() {


  return (
    <div className="container">
      <nav className="nav-main">
      <span className="nav-brand">CARLOS MARLETA</span>
        <ul className="nav-menu">
         <Recontact/>
        </ul>
      </nav>
      <hr></hr>
      
      <header className="showcase">
    
      </header>
    </div>
  );
}
