import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import "../Contact/contact.css";
import Recontact from "../Recontact";

export default function Contact() {
  const [sender_name, set_sender_name] = useState("");
  const [sender_email, set_sender_email] = useState("");
  const [message, set_message] = useState("");

  const handleName = (e) => {
    set_sender_name(e.target.value);
  };
  const handleEmail = (e) => {
    set_sender_email(e.target.value);
  };
  const handleMessage = (e) => {
    set_message(e.target.value);
  };

  const sendMail = (e) => {
    e.preventDefault();
    send(
      "service_il8fvg5",
      "template_0eliwm9",
      { sender_name, sender_email, message },
      "OCDVWX0zGI7WDE36F"
    )
      .then((response) => {
        console.log("Message send success", response.status, response.text);
      })
      .catch((err) => {
        console.log("faild", err);
      });
    set_sender_name(" ");
    set_sender_email(" ");
    set_message(" ");
  };
  return (
    <>
      <div>
        <Recontact />
      </div>
      <div className="containe">
      <div>
        <nav className="re">
          <strong className="re">CONTACT</strong>
        </nav>
      </div>
      <div className="form">
        <form onSubmit={sendMail}>
          <input
            className="boxis"
            type="text"
            name="sender_name"
            value={sender_name}
            onChange={handleName}
            required
            placeholder="full name"
          />
          <input
            className="boxis"
            type="email"
            name="sender_mail"
            value={sender_email}
            onChange={handleEmail}
            required
            placeholder="e-mail"
          />
          <textarea
            className="bo"
            name="message"
            value={message}
            onChange={handleMessage}
            required
            placeholder="message"
          />
          <button className="btn" type="submit">
            SEND
          </button>
          <div className="div">
            <div className="ion">
              <a href="https://github.com/kinko7" target="blank">
                <img 
                  height="55px"
                  src="https://cx5v8.csb.app/iconos/github-modo-oscuro.svg"
                  alt="no"
                />
              </a>
            </div>
            <div className="ion">
              <a href="https://www.linkedin.com/in/carlos-fullstackdeveloper" target="blank">
              
              <img
                height="58px"
                src="https://cx5v8.csb.app/iconos/linkedin.svg"
                alt="no"
              />
              </a>
            </div>
          </div>
        </form>
      </div>
      </div>

        <div className="phh">
          <h3>CORDOBA -ARGENTINA</h3> 
        </div>
    </>
  );
}
