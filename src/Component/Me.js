import React from "react";
import Recontact from "./Recontact"
import me from "../../src/Component/assets/me.jpg"

import "./Me.css";

export default function Me() {
  return (
    <>
    <Recontact/>
   
      <div className="containerrr">
        <div className="cards-containerrr">
          <div className="headerr">
            
              <img src={me} height="120px" width="120px"alt=""></img>
            
            <h2>Carlos Marleta</h2>
            <h5>Desarrollador Web Full Stack</h5>
          </div>
          <div className="descripcion">
            <p>I am Full Stack Developer graduated from Henry Bootcamp with more than +800 hs coding, oriented on Backend and also art education teacher. 
I found in this new profession the possibility of combining these two universes, creative artistic thinking and rational logical thinking to translate it into digital practices, providing solutions to new technological challenges!
I seek to collaborate and be part of a company that fully identifies with its vision, its culture and its technological projects. 
I am passionate about what I do.
I am looking for long-term job stability.
My goal is to learn from a great team by participating and collaborating in innovative, original, creative and personalized projects, adding value and motivation from my role.</p>
          </div>
        </div>
      </div>
    
    </>
  );
}
