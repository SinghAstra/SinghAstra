import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import MouseFollower from "./components/MouseFollower";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MouseFollower />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
