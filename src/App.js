import React from "react";
import SearchBar from "./SearchBar";
import Footer from "./Footer";

import "./App.css";
import "./SearchBar.css";
import "./Footer.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchBar defaultCity="Toronto" />
        <Footer />
      </div>
    </div>
  );
}
