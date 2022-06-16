import React from "react";
import { Link } from "react-router-dom";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Recontact from "../Recontact";

import Curriculum from "../assets/cv.pdf";

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
  
      </header>
    </div>
  );
}
