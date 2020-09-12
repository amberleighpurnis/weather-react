import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";

import "./App.css";
import "./Weather.css";
import "./Footer.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Toronto" />
        <Footer />
      </div>
    </div>
  );
}
