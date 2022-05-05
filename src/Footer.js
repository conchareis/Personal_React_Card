import React from "react";

import instagram from "./images/icons/Instagram Icon.png";
import facebook from "./images/icons/Facebook Icon.png";
import twitter from "./images/icons/Twitter Icon.png";
import github from "./images/icons/GitHub Icon.png";

export default function Footer() {
  return (
    <footer className="container-icons">
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
      <a href="https://github.com/conchareis" target="_blank" rel="noreferrer">
        <img src={github} className="gitbuh" alt="gitbuh" />
      </a>
    </footer>
  );
}
