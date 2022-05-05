import React from "react";
import picture from "./images/picture.jpg";

import instagram from "./images/icons/Instagram Icon.png";
import facebook from "./images/icons/Facebook Icon.png";
import twitter from "./images/icons/Twitter Icon.png";
import github from "./images/icons/GitHub Icon.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";

export default function MainContent() {
  return (
    <div className="container">
      <img src={picture} className="picture" alt="picture" />
      <h1>Concha Reis</h1>
      <h2>FrontEnd Developer</h2>
      <a href="concha-reis.pt" target="_blank" rel="noreferrer">
        concha-reis.pt
      </a>
      <div className="buttons">
        <button className="buttons-email">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="buttons-email-envelope"
          ></FontAwesomeIcon>
          Email
        </button>
        <button className="buttons-linkedin">
          <FontAwesomeIcon
            icon={faUserLarge}
            className="buttons-linkedin-user"
          ></FontAwesomeIcon>
          LinkedIn
        </button>
      </div>
      <div className="container-information">
        <div className="container-information-about">
          <h3>
            {" "}
            <FontAwesomeIcon
              icon={faBolt}
              className="nav-left-icon"
            ></FontAwesomeIcon>
            About
          </h3>
          <p>main information</p>
        </div>
        <div className="container-information-skills">
          <h3>
            {" "}
            <FontAwesomeIcon
              icon={faFireFlameCurved}
              className="nav-left-icon"
            ></FontAwesomeIcon>
            Skills
          </h3>
          <ul className="container-information-skills-list">
            <li>&#9733; HTML</li>
            <li> &#9733; CSS</li>
            <li> &#9733; Less</li>
            <li> &#9733; JavaScript &#9733;</li>
            <br></br>
            <li> &#9733; React</li>
          </ul>
        </div>
      </div>

      <div className="container-icons">
        <a
          href="https://www.instagram.com/conchardreis/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} className="instagram" alt="instagram" />
        </a>
        <a
          href="https://www.facebook.com/concha.reis/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={facebook} className="facebook" alt="facebook" />
        </a>
        <a
          href="https://www.facebook.com/concha.reis/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} className="twitter" alt="twitter" />
        </a>
        <a
          href="https://github.com/conchareis"
          target="_blank"
          rel="noreferrer"
        >
          <img src={github} className="gitbuh" alt="gitbuh" />
        </a>
      </div>
    </div>
  );
}
