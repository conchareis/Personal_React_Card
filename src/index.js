import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";

import Header from "./Header";
import MainContent from "./MainContent";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div>
    <Header />
    <MainContent />
  </div>
);

// function Page() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// ReactDOM.render(<Page />, document.getElementById("root"));

// ReactDOM.render(
//   <div>
//     <Header />
//     <MainContent />
//     <Footer />
//   </div>,
//   document.getElementById("root")
// );
