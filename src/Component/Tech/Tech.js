import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Tech.css";
import Node from "../assets/node.png";
import Js from "../assets/js.png";
import My from "../assets/my.png";
import Pos from "../assets/pos.png";
import Redux from "../assets/redux.png";
import Html from "../assets/htm.png";
import Recontact from "../Recontact"
import Redu from "../assets/redu.png"
import Css from "../assets/css.png"
 

export default function Tech() {
  // const [information, setInformation] = useState({});
  // useEffect(() => {
  //   axios
  //     .get("https://backend-portfolio-rene.herokuapp.com/about")
  //     .then((res) => setInformation(res.data[0]));
  // }, [setInformation]);

  return (
    <div>
      <Recontact/>
      <div>
          <nav className="nav-1">
            <span className="nav-2">TECHS SKILLS ...</span>
          </nav>
        </div>
        <div classname="riu">
          <div className="cards">
        
            <div className="butttons">
              <img src={Css} alt="no" />
                            <img src={Html} alt="no" />
              <img src={Js} alt="no" />
              <img src={Redu} alt="no" />
              <img src={Node} alt="no" />
              <img src={Pos} alt="no" />
              <img src={Redux} alt="no" />
           
            <h2> Css Html Javascript Redux NodeJS Postgres Redux</h2>

            </div>
          </div>
        </div>
   
      <div></div>
    </div>
  );
}
