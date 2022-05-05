import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <div className="nav-left">
          <p>
            <FontAwesomeIcon
              icon={faBolt}
              className="nav-left-icon"
            ></FontAwesomeIcon>
            <a
              className="nav-left-concha"
              href="https://concha-reis.pt"
              target="_blank"
              rel="noreferrer"
            >
              Concha Reis
            </a>
          </p>
        </div>

        <div className="nav-right">
          <a
            href="http://concha-reis.pt"
            className="nav-right-concha"
            target="_blank"
            rel="noreferrer"
          >
            &#169; Copyright Concha Reis 2022
          </a>
        </div>
      </nav>
    </header>
  );
}
