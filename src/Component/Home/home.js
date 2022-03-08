import React from "react";
import { Link } from "react-router-dom";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Recontact from "../Recontact";

import Curriculum from "../assets/cv.pdf";

import "../Home/home.css";

export default function Home() {
  const textRefe = useRef();

  useEffect(() => {
    init(textRefe.current, {
      showCursor: false,
      strings: [
        "CARLOS MARLETA",
        "Full Stack Web Developer                                                                         ",
      ],
    });
  }, []);

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
        {/* <span className="let" ref={textRefe}></span>{" "} */}
        {/* <a href="#">Read More <i className="fas fa-angle-double-right"></i></a>   */}

        <p className="vam">CARLOS MARLETA</p>
        <hr />
         <br />
        <strong className="vams"> FULL STACK DEVELOPER </strong>
      </header>
    </div>
  );
}
