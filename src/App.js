import React from "react";
import Weather from "./Weather";
import Search from "./Search";
import Footer from "./Footer";

import "./App.css";
import "./Weather.css";
import "./Search.css";
import "./Footer.css";

function App() {
  return (
    <div className="App">
      <Search />
      <Weather />
      <Footer />
    </div>
  );
}

export default App;
