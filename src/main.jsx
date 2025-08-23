/* eslint-disable import-x/extensions */

import React, { StrictMode } from "react";

import "bootstrap/dist/css/bootstrap.css";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
