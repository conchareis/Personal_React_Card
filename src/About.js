import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export default function About() {
  return (
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
  );
}
