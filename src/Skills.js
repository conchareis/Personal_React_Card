import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFireFlameCurved } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
  return (
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
  );
}
