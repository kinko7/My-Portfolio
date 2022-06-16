import React from "react";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import "../Contact/contact.css";
import Recontact from "../Recontact"


export default function Contact() {
  const textRefe = useRef();

  useEffect(() => {
    init(textRefe.current, {
      showCursor: false,
      strings: [
        "                Please, Feel free to reach me!                                                                       ",
        "                                                                        ",
      ],
    });
  }, []);

  return (
    <>
 
      <div>
        <Recontact/>
        <div>
          <nav className="nav-1">
            <span className="nav-2">CONTACT</span>
          </nav>
        </div>
        <div className="containers">
          <span className="lets" ref={textRefe}></span>{" "}
        </div>
        <br />
        <br />
        <div className="ion">
          <a href="https://github.com/kinko7" target="blank">
            <img src="https://cx5v8.csb.app/iconos/github-modo-claro.svg"
              alt="no"
            />
          </a>
          <a href="https://www.linkedin.com/in/carlos-fullstackdeveloper/"
            target="blank"
          >
            <img 
              src="https://cx5v8.csb.app/iconos/linkedin.svg"
              alt="no"
            />
          </a>
          <a href="mailto:carlosmarleta@gmail.com" target="blank">
            <img 
              src="https://cx5v8.csb.app/iconos/gmail.svg"
              alt="no"
            />
          </a>
        </div>
      </div>
      
    </>
  );
}
