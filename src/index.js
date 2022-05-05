import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

import Header from "./Header";
import Info from "./Info";
import Buttons from "./Buttons";
import Skills from "./Skills";
import About from "./About";
import Footer from "./Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header />
    <div className="container">
      <Info />
      <Buttons />
      <div className="container-information">
        <About />
        <Skills />
      </div>
      <Footer />
    </div>
  </div>
);
