import React from "react";
import Weather from "./Weather";
import Search from "./Search";

import "./App.css";
import "./Weather.css";
import "./Search.css";

function App() {
  return (
    <div className="App">
      <Search />
      <Weather />
    </div>
  );
}

export default App;
