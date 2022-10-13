import React, { useState, useEffect } from "react";
import { AiFillYoutube, AiFillGithub } from "react-icons/ai";
import axios from "axios";
import "./Proyects.css";
import Recontact from "../Recontact";

export default function Proyects() {
  const [proyects, setProyects] = useState({});
  useEffect(() => {
    axios
      .get("https://loadingdb.herokuapp.com/proyects")
      .then((res) => setProyects(res.data));
  }, [setProyects]);
  return (
    <>
      <Recontact />
      <div className="cont">
        <nav className="nav-1"></nav>

        <div className="containerr">



          {proyects.length > 0 &&
            proyects.map((e, i) => (

              <div className="card">
                <div>
                  <h3 key={i}>{e.name}</h3>
                  <img src={e.image}></img>
                  <br />
                  <h6>{e.description}</h6>
                  <h6>{e.tecnologies}</h6>
                  <div className="git">
                    <a href={e.tube} target="_blank">
                      <button className="bt">
                        GO
                      </button>
                    </a>
                    <a href={e.link} target="_blank">
                      <button className="bt">
                        <AiFillGithub />
                      </button>
                    </a>
                  </div>
                </div>


                <h6>@Copyright 2022</h6>
              </div>
            ))}


        </div>
      </div>


    </>
  );
}
