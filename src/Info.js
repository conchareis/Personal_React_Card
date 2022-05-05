import React from "react";
import picture from "./images/picture.jpg";

export default function Info() {
  return (
    <div className="container-info">
      <img src={picture} className="picture" alt="picture" />
      <h1>Concha Reis</h1>
      <h2>FrontEnd Developer</h2>
      <a href="concha-reis.pt" target="_blank" rel="noreferrer">
        concha-reis.pt
      </a>
    </div>
  );
}
