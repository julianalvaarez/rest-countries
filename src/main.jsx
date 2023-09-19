import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { CountriesApp } from "./CountriesApp.jsx";
import { CountriesContextProvider } from "./context/CountriesContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CountriesContextProvider>
    <React.StrictMode>
      <CountriesApp />
    </React.StrictMode>
  </CountriesContextProvider>
);
