import React from "react";
import ReactDOM from "react-dom/client";
import Clock from "./Clock.tsx";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Clock />
  </React.StrictMode>
);
