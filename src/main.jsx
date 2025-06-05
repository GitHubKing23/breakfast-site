import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";

console.log("Bootstrapping React app");

ReactDOM.createRoot(document.getElementById("app")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
