import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Tech.css";
import Node from "../assets/node.png";
import Js from "../assets/js.png";
import My from "../assets/my.png";
import Pos from "../assets/pos.png";
import Redux from "../assets/redux.png";
import Express from "../assets/express.png";
import Recontact from "../Recontact"
import Redu from "../assets/redu.png"
import Htm from "../assets/htm.png"
import Css from "../assets/css.png"
 

export default function Tech() {
  const [information, setInformation] = useState({});
  useEffect(() => {
    axios
      .get("https://backend-portfolio-rene.herokuapp.com/about")
      .then((res) => setInformation(res.data[0]));
  }, [setInformation]);

  return (
    <div>
      <Recontact/>
      <nav className="nav-1">
        <span className="nav-2">JAVASCRIPT - CSS - HTML - NODEJS - REACT - REDUX - EXPRESS - POSTGRES - SEQUELIZE </span>
      </nav>
      <div className="let">
        <div classname="riu">
          <div className="cards">
            <div className="butttons">
              <img src={Js} alt="no" />
              <img src={Redux} alt="no" />
              <img src={Redu} alt="no" />
              <img src={Node} alt="no" />
              <img src={My} alt="no" />
              <img src={Pos} alt="no" />
              <img src={Css} alt="no" />
              <img src={Htm} alt="no" />

              {/* <img src={Express} alt="no" /> */}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
