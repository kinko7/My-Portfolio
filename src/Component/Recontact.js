import React from "react";
import Ar from "./Contact/CV.pdf"

export default function Recontact(){

 
    return (
       <>
        <div className="container">
        <nav className="nav-main">
         
          <ul className="nav-menu">
          <li>
            <a href="/">HOME</a>
          </li>
            <li>
              <a href="/me">ABOUT</a>
            </li>
            <li>
              <a href="/tech">TECH SKILLS</a>
            </li>
            <li>
              <a href="/proyects">PROJECTS</a>
            </li>
            <li>
        
            <a download href={Ar} >
                DOWNLOAD CV
              </a>
            </li>
  
            <li>
              <a href="/contact">CONTACT</a>
            </li>
          </ul>
        </nav>
        </div>
        </>
      
    )
}
