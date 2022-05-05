import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUserLarge } from "@fortawesome/free-solid-svg-icons";

export default function Buttons() {
  return (
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
  );
}
