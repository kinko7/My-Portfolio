import React from "react";
import "./Tech.css";
import Gral from "../assets/77.jpg";
import Recontact from "../Recontact";

export default function Tech() {
  return (
    <div>
      <Recontact />
      <div>
        <nav className="nav-1"></nav>
      </div>
      <div className="techs">
        <img src={Gral} alt="no" />
      </div>
    </div>
  );
}
