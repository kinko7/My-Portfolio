import React, { useState, useEffect } from "react";
import { AiFillYoutube } from "react-icons/ai";
import axios from "axios";
import git from "../assets/git.png";
import "./Proyects.css";
import Recontact from "../Recontact";

export default function Proyects() {
  const [proyects, setProyects] = useState({});
  useEffect(() => {
    axios
      .get("https://backend-portcarls.herokuapp.com/proyects")
      .then((res) => setProyects(res.data));
  }, [setProyects]);
  return (
    <>
      <Recontact />
      <div className="cont">
        <nav className="nav-1"></nav>

        <span className="nav-2">PROYECTS</span>
        <div className="news-cards">
          {proyects.length > 0 &&
            proyects.map((e, i) => (
              <div>
                <h5 key={i}>{e.name}</h5>
                <img src={e.image}></img>
                <p>{e.description}</p>
                <div className="git">
                  <a href={e.tube} target="_blank">
                    <button className="bt">
                      <AiFillYoutube />
                    </button>
                  </a>
                  <a href={e.link} target="_blank">
                  <img
              className="redimension"
              src="https://cx5v8.csb.app/iconos/github-modo-claro.svg"
              alt="no"
            />
                  </a>
                  {/* <a href={e.link} target="_blank">clik</a> */}
                </div>
              </div>
            ))}
        </div>
        <div className="foot">Copyright derechos reservados.</div>
      </div>
    </>
  );
}
