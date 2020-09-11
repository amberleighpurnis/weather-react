import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <div className="navbar">
        <nav className="navbar navbar-light bg-light">
          <a href="_blank" className="navbar-brand">
            Current Weather{" "}
          </a>
          <form className="form-inline" id="search-form">
            <div className="input">
              <input
                className="form-control mr-sm-3"
                type="Search"
                autocomplete="off"
                autofocus="on"
                placeholder="Search for city..."
                aria-label="Search"
                id="search-text-input"
              />
            </div>
            <button
              className="btn btn-info my-2 my-sm-0"
              type="submit"
              value="Search"
            >
              Search
            </button>
            <button
              className="btn btn-info my-2 my-sm-0"
              type="button"
              value="Search"
            >
              Current
            </button>
          </form>
        </nav>
      </div>
    </div>
  );
}
