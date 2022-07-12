import React, { useState, useEffect } from "react";
import { AiFillYoutube, AiFillGithub} from "react-icons/ai";
import axios from "axios";
import "./Proyects.css";
import Recontact from "../Recontact";

export default function Proyects() {
  const [proyects, setProyects] = useState({});
  useEffect(() => {
    axios
      .get("https://beta-films.herokuapp.com/films")
      .then((res) => setProyects(res.data));
  }, [setProyects]);
  return (
    <>
      <Recontact />
      <div className="cont">
        <nav className="nav-1"></nav>

       
        <div className="news-cards">
          {proyects.length > 0 &&
            proyects.map((e, i) => (
              <div>
                <h5 key={i}>{e.name}</h5>
                <img src={e.image}></img>
                <p>{e.description}</p>
                <p>{e.tecnologies}</p>
                <div className="git">
                  <a href={e.tube} target="_blank">
                    <button className="bt">
                      <AiFillYoutube />
                    </button>
                  </a>
                  <a href={e.link} target="_blank">
                  <button className="bt">
                      <AiFillGithub/>
                      </button>
                  </a>
                  {/* <a href={e.link} target="_blank">clik</a> */}
                </div>
              </div>
            ))}
        </div>
        <div className="foot">@Copyright derechos reservados.</div>
      </div>
    </>
  );
}
