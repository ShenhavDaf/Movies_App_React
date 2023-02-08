import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/* Option 1: */
// ReactDOM.render(<App />, document.getElementById("root"));

/* Option 2: */
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
