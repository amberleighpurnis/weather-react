import React from "react";

export default function Weather() {
  let weatherData = {
    city: "Toronto",
    temperature: 30,
    feelsLike: 31,
    date: "Tuesday 15:00",
    description: "Sunny",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 30,
    wind: 10,
    sunrise: "06:00",
    sunset: "19:30",
  };

  return (
    <div className="Weather">
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
                autoFocus="on"
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
      <div className="container-flex">
        <h1 className="cityName"> {weatherData.city} </h1>
        <ul className="city">
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-7">
            <div className="clearfix icon">
              <img src={weatherData.imgUrl} alt="sunny" />
            </div>
            <span className="temperature"> {weatherData.temperature} </span>
            <span className="unit">
              <a href="_blank" className="metric">
                ºC
              </a>{" "}
              |{" "}
              <a href="_blank" className="imperial">
                ºF
              </a>
            </span>
            <br />
            <span className="feelsLike">
              feels like {weatherData.feelsLike}º
            </span>
          </div>
          <div className="col-5">
            <div className="conditions">
              <p>
                <strong>Humidity:</strong> {weatherData.humidity}%
              </p>
              <p>
                <strong>Wind:</strong> {weatherData.wind} km/h
              </p>
              <p>
                <strong>Sunrise:</strong> {weatherData.sunrise}
              </p>
              <p>
                <strong>Sunset:</strong> {weatherData.sunset}{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
