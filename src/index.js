import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const heading = React.createElement(
  "h1",
  {
    id: "main-heading",
    className: "title",
  },
  "custom react setup"
);
const para = React.createElement("p", null, "This is Para");

const container = React.createElement(
  "div",
  { id: "container" },
  heading,
  para
);

const container2 = <h2>Hello</h2>;

const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

root.render(container2);
