import React from "react";
import Recontact from "../Recontact";
import "../Home/home.css";
import Me from "../Me";
import Tech from "../Tech/Tech";
import Projects from "../Proyects/Proyects";
import Contact from "../Contact/contact";

export default function Home() {
  return (
    <>
      <div className="container">
        <nav className="nav-main">
          {/* <span className="nav-brand">CARLOS MARLETTA</span> */}
          <ul className="nav-menu">
            <Recontact />
          </ul>
        </nav>
        <hr></hr>
        <p class="maquina-escribir">Hi, my name is CARLOS MARLETA <span class="cursor"></span></p>
        <p class="maquina-escribira">I´m Sotware Developer <span class="cursora"></span></p>
        <header className="showcase"></header>
      </div>
    </>
  );
}
